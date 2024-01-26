import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all Actions
		 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
		 * Get actions
		 * @param {number} id Can be used multiple times, the response will contain only Actions with specified IDs
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {ActionsGetByIdAndSortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		ActionsGetByIdAndSortAndStatus(id: number | null | undefined, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<ActionsGetByIdAndSortAndStatusReturn> {
			return this.http.get<ActionsGetByIdAndSortAndStatusReturn>(this.baseUri + 'actions?id=' + id + '&sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an Action
		 * Returns a specific Action object.
		 * Get actions/{id}
		 * @param {number} id ID of the Resource
		 * @return {Actions_idGetReturn} The `action` key in the reply has this structure
		 */
		Actions_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Actions_idGetReturn> {
			return this.http.get<Actions_idGetReturn>(this.baseUri + 'actions/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Certificates
		 * Returns all Certificate objects.
		 * Get certificates
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeType} type Can be used multiple times. The response will only contain Certificates matching the type.
		 * @return {CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturn} The `certificates` key contains an array of Certificate objects
		 */
		CertificatesGetBySortAndNameAndLabel_selectorAndType(sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, name: string | null | undefined, label_selector: string | null | undefined, type: CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined, headersHandler?: () => HttpHeaders): Observable<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturn> {
			return this.http.get<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturn>(this.baseUri + 'certificates?sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)) + '&type=' + type, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Certificate
		 * Creates a new Certificate.
		 * The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.
		 * In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.
		 * For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
		 * Post certificates
		 * @return {void} 
		 */
		CertificatesPost(requestBody: CertificatesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'certificates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Certificate
		 * Deletes a Certificate.
		 * Delete certificates/{id}
		 * @param {number} id ID of the resource
		 * @return {void} 
		 */
		Certificates_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Certificate
		 * Gets a specific Certificate object.
		 * Get certificates/{id}
		 * @param {number} id ID of the resource
		 * @return {Certificates_idGetReturn} The `certificate` key contains a Certificate object
		 */
		Certificates_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Certificates_idGetReturn> {
			return this.http.get<Certificates_idGetReturn>(this.baseUri + 'certificates/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Certificate
		 * Updates the Certificate properties.
		 * Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Note: if the Certificate object changes during the request, the response will be a “conflict” error.
		 * Put certificates/{id}
		 * @param {number} id ID of the resource
		 * @return {Certificates_idPutReturn} The `certificate` key contains the Certificate that was just updated
		 */
		Certificates_idPut(id: number, requestBody: Certificates_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Certificates_idPutReturn> {
			return this.http.put<Certificates_idPutReturn>(this.baseUri + 'certificates/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Certificate
		 * Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
		 * Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
		 * Get certificates/{id}/actions
		 * @param {number} id ID of the Resource
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Certificates_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Certificates_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Certificates_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Certificates_idActionsGetBySortAndStatusReturn>(this.baseUri + 'certificates/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retry Issuance or Renewal
		 * Retry a failed Certificate issuance or renewal.
		 * Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
		 * #### Call specific error codes
		 * | Code                                                    | Description                                                               |
		 * |---------------------------------------------------------|---------------------------------------------------------------------------|
		 * | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
		 * | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
		 * | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
		 * | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
		 * | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
		 * | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
		 * | `dns_zone_not_found`                                    | DNS zone not found                                                        |
		 * | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
		 * Post certificates/{id}/actions/retry
		 * @param {number} id ID of the Certificate
		 * @return {void} 
		 */
		Certificates_idActionsRetryPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'certificates/' + id + '/actions/retry', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Certificate
		 * Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
		 * Get certificates/{id}/actions/{action_id}
		 * @param {number} id ID of the Certificate
		 * @param {number} action_id ID of the Action
		 * @return {Certificates_idActions_action_idGetReturn} The `action` key contains the Certificate Action
		 */
		Certificates_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Certificates_idActions_action_idGetReturn> {
			return this.http.get<Certificates_idActions_action_idGetReturn>(this.baseUri + 'certificates/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Datacenters
		 * Returns all Datacenter objects.
		 * Get datacenters
		 * @param {string} name Can be used to filter Datacenters by their name. The response will only contain the Datacenter matching the specified name. When the name does not match the Datacenter name format, an `invalid_input` error is returned.
		 * @return {DatacentersGetByNameReturn} The reply contains the `datacenters` and `recommendation` keys
		 */
		DatacentersGetByName(name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<DatacentersGetByNameReturn> {
			return this.http.get<DatacentersGetByNameReturn>(this.baseUri + 'datacenters?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a Datacenter
		 * Returns a specific Datacenter object.
		 * Get datacenters/{id}
		 * @param {number} id ID of Datacenter
		 * @return {Datacenters_idGetReturn} The `datacenter` key in the reply contains a Datacenter object with this structure
		 */
		Datacenters_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Datacenters_idGetReturn> {
			return this.http.get<Datacenters_idGetReturn>(this.baseUri + 'datacenters/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Firewalls
		 * Returns all Firewall objects.
		 * Get firewalls
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @return {FirewallsGetBySortAndNameAndLabel_selectorReturn} The `firewalls` key contains an array of Firewall objects
		 */
		FirewallsGetBySortAndNameAndLabel_selector(sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, name: string | null | undefined, label_selector: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<FirewallsGetBySortAndNameAndLabel_selectorReturn> {
			return this.http.get<FirewallsGetBySortAndNameAndLabel_selectorReturn>(this.baseUri + 'firewalls?sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Firewall
		 * Creates a new Firewall.
		 * #### Call specific error codes
		 * | Code                          | Description                                                   |
		 * |------------------------------ |-------------------------------------------------------------- |
		 * | `server_already_added`        | Server added more than one time to resource                   |
		 * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
		 * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
		 * Post firewalls
		 * @return {void} 
		 */
		FirewallsPost(requestBody: FirewallsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'firewalls', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Firewall
		 * Deletes a Firewall.
		 * #### Call specific error codes
		 * | Code                 | Description                               |
		 * |--------------------- |-------------------------------------------|
		 * | `resource_in_use`    | Firewall must not be in use to be deleted |
		 * Delete firewalls/{id}
		 * @param {number} id ID of the resource
		 * @return {void} 
		 */
		Firewalls_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'firewalls/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Firewall
		 * Gets a specific Firewall object.
		 * Get firewalls/{id}
		 * @param {number} id ID of the resource
		 * @return {Firewalls_idGetReturn} The `firewall` key contains a Firewall object
		 */
		Firewalls_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Firewalls_idGetReturn> {
			return this.http.get<Firewalls_idGetReturn>(this.baseUri + 'firewalls/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Firewall
		 * Updates the Firewall.
		 * Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Note: if the Firewall object changes during the request, the response will be a “conflict” error.
		 * Put firewalls/{id}
		 * @param {number} id ID of the resource
		 * @return {Firewalls_idPutReturn} The `firewall` key contains the Firewall that was just updated
		 */
		Firewalls_idPut(id: number, requestBody: Firewalls_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Firewalls_idPutReturn> {
			return this.http.put<Firewalls_idPutReturn>(this.baseUri + 'firewalls/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Firewall
		 * Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
		 * Get firewalls/{id}/actions
		 * @param {number} id ID of the Resource
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Firewalls_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Firewalls_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Firewalls_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Firewalls_idActionsGetBySortAndStatusReturn>(this.baseUri + 'firewalls/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Apply to Resources
		 * Applies one Firewall to multiple resources.
		 * Currently servers (public network interface) and label selectors are supported.
		 * #### Call specific error codes
		 * | Code                          | Description                                                   |
		 * |-------------------------------|---------------------------------------------------------------|
		 * | `firewall_already_applied`    | Firewall was already applied on resource                      |
		 * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
		 * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
		 * Post firewalls/{id}/actions/apply_to_resources
		 * @param {number} id ID of the Firewall
		 * @return {void} 
		 */
		Firewalls_idActionsApply_to_resourcesPost(id: number, requestBody: Firewalls_idActionsApply_to_resourcesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'firewalls/' + id + '/actions/apply_to_resources', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove from Resources
		 * Removes one Firewall from multiple resources.
		 * Currently only Servers (and their public network interfaces) are supported.
		 * #### Call specific error codes
		 * | Code                                  | Description                                                            |
		 * |---------------------------------------|------------------------------------------------------------------------|
		 * | `firewall_already_removed`            | Firewall was already removed from the resource                         |
		 * | `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
		 * | `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |
		 * Post firewalls/{id}/actions/remove_from_resources
		 * @param {number} id ID of the Firewall
		 * @return {void} 
		 */
		Firewalls_idActionsRemove_from_resourcesPost(id: number, requestBody: Firewalls_idActionsRemove_from_resourcesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'firewalls/' + id + '/actions/remove_from_resources', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Set Rules
		 * Sets the rules of a Firewall.
		 * All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
		 * The maximum amount of rules that can be defined is 50.
		 * #### Call specific error codes
		 * | Code                          | Description                                                   |
		 * |-------------------------------|---------------------------------------------------------------|
		 * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
		 * Post firewalls/{id}/actions/set_rules
		 * @param {number} id ID of the Firewall
		 * @return {void} 
		 */
		Firewalls_idActionsSet_rulesPost(id: number, requestBody: Firewalls_idActionsSet_rulesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'firewalls/' + id + '/actions/set_rules', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Firewall
		 * Returns a specific Action for a Firewall.
		 * Get firewalls/{id}/actions/{action_id}
		 * @param {number} id ID of the Firewall
		 * @param {number} action_id ID of the Action
		 * @return {Firewalls_idActions_action_idGetReturn} The `action` key contains the Firewall Action
		 */
		Firewalls_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Firewalls_idActions_action_idGetReturn> {
			return this.http.get<Firewalls_idActions_action_idGetReturn>(this.baseUri + 'firewalls/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Floating IPs
		 * Returns all Floating IP objects.
		 * Get floating_ips
		 * @param {string} name Can be used to filter Floating IPs by their name. The response will only contain the Floating IP matching the specified name.
		 * @param {string} label_selector Can be used to filter Floating IPs by labels. The response will only contain Floating IPs matching the label selector.
		 * @param {Floating_ipsGetByNameAndLabel_selectorAndSortSort} sort Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc
		 * @return {Floating_ipsGetByNameAndLabel_selectorAndSortReturn} The `floating_ips` key in the reply contains an array of Floating IP objects with this structure
		 */
		Floating_ipsGetByNameAndLabel_selectorAndSort(name: string | null | undefined, label_selector: string | null | undefined, sort: Floating_ipsGetByNameAndLabel_selectorAndSortSort | null | undefined, headersHandler?: () => HttpHeaders): Observable<Floating_ipsGetByNameAndLabel_selectorAndSortReturn> {
			return this.http.get<Floating_ipsGetByNameAndLabel_selectorAndSortReturn>(this.baseUri + 'floating_ips?name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)) + '&sort=' + sort, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Floating IP
		 * Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.
		 * Post floating_ips
		 * @param {Floating_ipsPostPostBody} requestBody The `type` argument is required while `home_location` and `server` are mutually exclusive.
		 * @return {void} 
		 */
		Floating_ipsPost(requestBody: Floating_ipsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'floating_ips', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Floating IP
		 * Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.
		 * Delete floating_ips/{id}
		 * @param {number} id ID of the Floating IP
		 * @return {void} 
		 */
		Floating_ips_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'floating_ips/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Floating IP
		 * Returns a specific Floating IP object.
		 * Get floating_ips/{id}
		 * @param {number} id ID of the Floating IP
		 * @return {Floating_ips_idGetReturn} The `floating_ip` key in the reply contains a Floating IP object with this structure
		 */
		Floating_ips_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Floating_ips_idGetReturn> {
			return this.http.get<Floating_ips_idGetReturn>(this.baseUri + 'floating_ips/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Floating IP
		 * Updates the description or labels of a Floating IP.
		 * Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Put floating_ips/{id}
		 * @param {number} id ID of the Floating IP
		 * @return {Floating_ips_idPutReturn} The `floating_ip` key in the reply contains the modified Floating IP object with the new description
		 */
		Floating_ips_idPut(id: number, requestBody: Floating_ips_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Floating_ips_idPutReturn> {
			return this.http.put<Floating_ips_idPutReturn>(this.baseUri + 'floating_ips/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Floating IP
		 * Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
		 * Get floating_ips/{id}/actions
		 * @param {number} id ID of the Floating IP
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Floating_ips_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Floating_ips_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Floating_ips_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Floating_ips_idActionsGetBySortAndStatusReturn>(this.baseUri + 'floating_ips/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Assign a Floating IP to a Server
		 * Assigns a Floating IP to a Server.
		 * Post floating_ips/{id}/actions/assign
		 * @param {number} id ID of the Floating IP
		 * @return {void} 
		 */
		Floating_ips_idActionsAssignPost(id: number, requestBody: Floating_ips_idActionsAssignPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'floating_ips/' + id + '/actions/assign', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change reverse DNS entry for a Floating IP
		 * Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
		 * Post floating_ips/{id}/actions/change_dns_ptr
		 * @param {number} id ID of the Floating IP
		 * @param {Floating_ips_idActionsChange_dns_ptrPostPostBody} requestBody Select the IP address for which to change the DNS entry by passing `ip`. For a Floating IP of type `ipv4` this must exactly match the IP address of the Floating IP. For a Floating IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Floating IP. You can add up to 100 IPv6 reverse DNS entries.
		 * The target hostname is set by passing `dns_ptr`.
		 * @return {void} 
		 */
		Floating_ips_idActionsChange_dns_ptrPost(id: number, requestBody: Floating_ips_idActionsChange_dns_ptrPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'floating_ips/' + id + '/actions/change_dns_ptr', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Floating IP Protection
		 * Changes the protection configuration of the Floating IP.
		 * Post floating_ips/{id}/actions/change_protection
		 * @param {number} id ID of the Floating IP
		 * @return {void} 
		 */
		Floating_ips_idActionsChange_protectionPost(id: number, requestBody: Floating_ips_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'floating_ips/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unassign a Floating IP
		 * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
		 * Post floating_ips/{id}/actions/unassign
		 * @param {number} id ID of the Floating IP
		 * @return {void} 
		 */
		Floating_ips_idActionsUnassignPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'floating_ips/' + id + '/actions/unassign', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Floating IP
		 * Returns a specific Action object for a Floating IP.
		 * Get floating_ips/{id}/actions/{action_id}
		 * @param {number} id ID of the Floating IP
		 * @param {number} action_id ID of the Action
		 * @return {Floating_ips_idActions_action_idGetReturn} The `action` key in the reply has this structure
		 */
		Floating_ips_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Floating_ips_idActions_action_idGetReturn> {
			return this.http.get<Floating_ips_idActions_action_idGetReturn>(this.baseUri + 'floating_ips/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Images
		 * Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.
		 * Get images
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureType} type Can be used multiple times.
		 * @param {ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureStatus} status Can be used multiple times. The response will only contain Images matching the status.
		 * @param {string} bound_to Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`
		 * @param {boolean} include_deprecated Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @param {string} architecture Return only Images with the given architecture.
		 * @return {ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturn} The `images` key in the reply contains an array of Image objects with this structure
		 */
		ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitecture(sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureType | null | undefined, status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureStatus | null | undefined, bound_to: string | null | undefined, include_deprecated: boolean | null | undefined, name: string | null | undefined, label_selector: string | null | undefined, architecture: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturn> {
			return this.http.get<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturn>(this.baseUri + 'images?sort=' + sort + '&type=' + type + '&status=' + status + '&bound_to=' + (bound_to == null ? '' : encodeURIComponent(bound_to)) + '&include_deprecated=' + include_deprecated + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)) + '&architecture=' + (architecture == null ? '' : encodeURIComponent(architecture)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an Image
		 * Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
		 * Delete images/{id}
		 * @param {number} id ID of the Image
		 * @return {void} 
		 */
		Images_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'images/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Image
		 * Returns a specific Image object.
		 * Get images/{id}
		 * @param {number} id ID of the Image
		 * @return {Images_idGetReturn} The `image` key in the reply contains an Image object with this structure
		 */
		Images_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Images_idGetReturn> {
			return this.http.get<Images_idGetReturn>(this.baseUri + 'images/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an Image
		 * Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.
		 * Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Put images/{id}
		 * @param {number} id ID of the Image
		 * @return {Images_idPutReturn} The image key in the reply contains the modified Image object
		 */
		Images_idPut(id: number, requestBody: Images_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Images_idPutReturn> {
			return this.http.put<Images_idPutReturn>(this.baseUri + 'images/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for an Image
		 * Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
		 * Get images/{id}/actions
		 * @param {number} id ID of the Image
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Images_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Images_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Images_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Images_idActionsGetBySortAndStatusReturn>(this.baseUri + 'images/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Change Image Protection
		 * Changes the protection configuration of the Image. Can only be used on snapshots.
		 * Post images/{id}/actions/change_protection
		 * @param {number} id ID of the Image
		 * @return {void} 
		 */
		Images_idActionsChange_protectionPost(id: number, requestBody: Images_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'images/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for an Image
		 * Returns a specific Action for an Image.
		 * Get images/{id}/actions/{action_id}
		 * @param {number} id ID of the Image
		 * @param {number} action_id ID of the Action
		 * @return {Images_idActions_action_idGetReturn} The `action` key contains the Image Action
		 */
		Images_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Images_idActions_action_idGetReturn> {
			return this.http.get<Images_idActions_action_idGetReturn>(this.baseUri + 'images/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all ISOs
		 * Returns all available ISO objects.
		 * Get isos
		 * @param {string} name Can be used to filter ISOs by their name. The response will only contain the ISO matching the specified name.
		 * @param {string} architecture Return only ISOs with the given architecture.
		 * @param {boolean} include_architecture_wildcard Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified.
		 * @return {IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturn} The `isos` key in the reply contains an array of iso objects with this structure
		 */
		IsosGetByNameAndArchitectureAndInclude_architecture_wildcard(name: string | null | undefined, architecture: string | null | undefined, include_architecture_wildcard: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturn> {
			return this.http.get<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturn>(this.baseUri + 'isos?name=' + (name == null ? '' : encodeURIComponent(name)) + '&architecture=' + (architecture == null ? '' : encodeURIComponent(architecture)) + '&include_architecture_wildcard=' + include_architecture_wildcard, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an ISO
		 * Returns a specific ISO object.
		 * Get isos/{id}
		 * @param {number} id ID of the ISO
		 * @return {Isos_idGetReturn} The `iso` key in the reply contains an array of ISO objects with this structure
		 */
		Isos_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Isos_idGetReturn> {
			return this.http.get<Isos_idGetReturn>(this.baseUri + 'isos/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Load Balancer Types
		 * Gets all Load Balancer type objects.
		 * Get load_balancer_types
		 * @param {string} name Can be used to filter Load Balancer types by their name. The response will only contain the Load Balancer type matching the specified name.
		 * @return {Load_balancer_typesGetByNameReturn} The `load_balancer_types` key in the reply contains an array of Load Balancer type objects with this structure
		 */
		Load_balancer_typesGetByName(name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Load_balancer_typesGetByNameReturn> {
			return this.http.get<Load_balancer_typesGetByNameReturn>(this.baseUri + 'load_balancer_types?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a Load Balancer Type
		 * Gets a specific Load Balancer type object.
		 * Get load_balancer_types/{id}
		 * @param {number} id ID of Load Balancer type
		 * @return {Load_balancer_types_idGetReturn} The `load_balancer_type` key in the reply contains a Load Balancer type object with this structure
		 */
		Load_balancer_types_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Load_balancer_types_idGetReturn> {
			return this.http.get<Load_balancer_types_idGetReturn>(this.baseUri + 'load_balancer_types/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Load Balancers
		 * Gets all existing Load Balancers that you have available.
		 * Get load_balancers
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @return {Load_balancersGetBySortAndNameAndLabel_selectorReturn} The `load_balancers` key contains a list of Load Balancers
		 */
		Load_balancersGetBySortAndNameAndLabel_selector(sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, name: string | null | undefined, label_selector: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Load_balancersGetBySortAndNameAndLabel_selectorReturn> {
			return this.http.get<Load_balancersGetBySortAndNameAndLabel_selectorReturn>(this.baseUri + 'load_balancers?sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Load Balancer
		 * Creates a Load Balancer.
		 * #### Call specific error codes
		 * | Code                                    | Description                                                                                           |
		 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
		 * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
		 * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
		 * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
		 * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
		 * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
		 * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
		 * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
		 * Post load_balancers
		 * @return {void} 
		 */
		Load_balancersPost(requestBody: Load_balancersPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Load Balancer
		 * Deletes a Load Balancer.
		 * Delete load_balancers/{id}
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'load_balancers/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Load Balancer
		 * Gets a specific Load Balancer object.
		 * Get load_balancers/{id}
		 * @param {number} id ID of the Load Balancer
		 * @return {Load_balancers_idGetReturn} The `load_balancer` key contains the Load Balancer
		 */
		Load_balancers_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Load_balancers_idGetReturn> {
			return this.http.get<Load_balancers_idGetReturn>(this.baseUri + 'load_balancers/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Load Balancer
		 * Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
		 * Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
		 * Put load_balancers/{id}
		 * @param {number} id ID of the Load Balancer
		 * @return {Load_balancers_idPutReturn} The `load_balancer` key contains the updated Load Balancer
		 */
		Load_balancers_idPut(id: number, requestBody: Load_balancers_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Load_balancers_idPutReturn> {
			return this.http.put<Load_balancers_idPutReturn>(this.baseUri + 'load_balancers/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Load Balancer
		 * Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
		 * Get load_balancers/{id}/actions
		 * @param {number} id ID of the Load Balancer
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Load_balancers_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Load_balancers_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Load_balancers_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Load_balancers_idActionsGetBySortAndStatusReturn>(this.baseUri + 'load_balancers/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add Service
		 * Adds a service to a Load Balancer.
		 * #### Call specific error codes
		 * | Code                       | Description                                             |
		 * |----------------------------|---------------------------------------------------------|
		 * | `source_port_already_used` | The source port you are trying to add is already in use |
		 * Post load_balancers/{id}/actions/add_service
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsAdd_servicePost(id: number, requestBody: Load_balancers_idActionsAdd_servicePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/add_service', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Add Target
		 * Adds a target to a Load Balancer.
		 * #### Call specific error codes
		 * | Code                                    | Description                                                                                           |
		 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
		 * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
		 * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
		 * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
		 * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
		 * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
		 * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
		 * Post load_balancers/{id}/actions/add_target
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsAdd_targetPost(id: number, requestBody: Load_balancers_idActionsAdd_targetPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/add_target', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Attach a Load Balancer to a Network
		 * Attach a Load Balancer to a Network.
		 * **Call specific error codes**
		 * | Code                             | Description                                                           |
		 * |----------------------------------|-----------------------------------------------------------------------|
		 * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
		 * | `ip_not_available`               | The provided Network IP is not available                              |
		 * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
		 * Post load_balancers/{id}/actions/attach_to_network
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsAttach_to_networkPost(id: number, requestBody: Load_balancers_idActionsAttach_to_networkPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/attach_to_network', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Algorithm
		 * Change the algorithm that determines to which target new requests are sent.
		 * Post load_balancers/{id}/actions/change_algorithm
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsChange_algorithmPost(id: number, requestBody: Load_balancers_idActionsChange_algorithmPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/change_algorithm', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change reverse DNS entry for this Load Balancer
		 * Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
		 * Floating IPs assigned to the Server are not affected by this.
		 * Post load_balancers/{id}/actions/change_dns_ptr
		 * @param {number} id ID of the Load Balancer
		 * @param {Load_balancers_idActionsChange_dns_ptrPostPostBody} requestBody Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
		 * @return {void} 
		 */
		Load_balancers_idActionsChange_dns_ptrPost(id: number, requestBody: Load_balancers_idActionsChange_dns_ptrPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/change_dns_ptr', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Load Balancer Protection
		 * Changes the protection configuration of a Load Balancer.
		 * Post load_balancers/{id}/actions/change_protection
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsChange_protectionPost(id: number, requestBody: Load_balancers_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the Type of a Load Balancer
		 * Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
		 * **Call specific error codes**
		 * | Code                         | Description                                                     |
		 * |------------------------------|-----------------------------------------------------------------|
		 * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
		 * Post load_balancers/{id}/actions/change_type
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsChange_typePost(id: number, requestBody: Load_balancers_idActionsChange_typePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/change_type', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Service
		 * Delete a service of a Load Balancer.
		 * Post load_balancers/{id}/actions/delete_service
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsDelete_servicePost(id: number, requestBody: Load_balancers_idActionsDelete_servicePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/delete_service', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Detach a Load Balancer from a Network
		 * Detaches a Load Balancer from a network.
		 * Post load_balancers/{id}/actions/detach_from_network
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsDetach_from_networkPost(id: number, requestBody: Load_balancers_idActionsDetach_from_networkPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/detach_from_network', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable the public interface of a Load Balancer
		 * Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
		 * #### Call specific error codes
		 * | Code                                      | Description                                                                    |
		 * |-------------------------------------------|--------------------------------------------------------------------------------|
		 * | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
		 * | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
		 * Post load_balancers/{id}/actions/disable_public_interface
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsDisable_public_interfacePost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/disable_public_interface', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable the public interface of a Load Balancer
		 * Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
		 * Post load_balancers/{id}/actions/enable_public_interface
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsEnable_public_interfacePost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/enable_public_interface', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Target
		 * Removes a target from a Load Balancer.
		 * Post load_balancers/{id}/actions/remove_target
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsRemove_targetPost(id: number, requestBody: Load_balancers_idActionsRemove_targetPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/remove_target', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Service
		 * Updates a Load Balancer Service.
		 * #### Call specific error codes
		 * | Code                       | Description                                             |
		 * |----------------------------|---------------------------------------------------------|
		 * | `source_port_already_used` | The source port you are trying to add is already in use |
		 * Post load_balancers/{id}/actions/update_service
		 * @param {number} id ID of the Load Balancer
		 * @return {void} 
		 */
		Load_balancers_idActionsUpdate_servicePost(id: number, requestBody: Load_balancers_idActionsUpdate_servicePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'load_balancers/' + id + '/actions/update_service', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Load Balancer
		 * Returns a specific Action for a Load Balancer.
		 * Get load_balancers/{id}/actions/{action_id}
		 * @param {number} id ID of the Load Balancer
		 * @param {number} action_id ID of the Action
		 * @return {Load_balancers_idActions_action_idGetReturn} The `action` key contains the Load Balancer Action
		 */
		Load_balancers_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Load_balancers_idActions_action_idGetReturn> {
			return this.http.get<Load_balancers_idActions_action_idGetReturn>(this.baseUri + 'load_balancers/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Metrics for a LoadBalancer
		 * You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
		 * Depending on the type you will get different time series data:
		 * |Type | Timeseries | Unit | Description |
		 * |---- |------------|------|-------------|
		 * | open_connections | open_connections | number | Open connections |
		 * | connections_per_second | connections_per_second | connections/s | Connections per second |
		 * | requests_per_second | requests_per_second | requests/s | Requests per second |
		 * | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
		 * || bandwidth.out | bytes/s | Egress bandwidth |
		 * Metrics are available for the last 30 days only.
		 * If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
		 * We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
		 * Get load_balancers/{id}/metrics
		 * @param {number} id ID of the Load Balancer
		 * @param {Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepType} type Type of metrics to get
		 * @param {string} start Start of period to get Metrics for (in ISO-8601 format)
		 * @param {string} end End of period to get Metrics for (in ISO-8601 format)
		 * @param {string} step Resolution of results in seconds
		 * @return {Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturn} The `metrics` key in the reply contains a metrics object with this structure
		 */
		Load_balancers_idMetricsGetByTypeAndStartAndEndAndStep(id: number, type: Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepType, start: string, end: string, step: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturn> {
			return this.http.get<Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturn>(this.baseUri + 'load_balancers/' + id + '/metrics?type=' + type + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&step=' + (step == null ? '' : encodeURIComponent(step)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Locations
		 * Returns all Location objects.
		 * Get locations
		 * @param {string} name Can be used to filter Locations by their name. The response will only contain the Location matching the specified name.
		 * @return {LocationsGetByNameReturn} The `locations` key in the reply contains an array of Location objects with this structure
		 */
		LocationsGetByName(name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<LocationsGetByNameReturn> {
			return this.http.get<LocationsGetByNameReturn>(this.baseUri + 'locations?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a Location
		 * Returns a specific Location object.
		 * Get locations/{id}
		 * @param {number} id ID of Location
		 * @return {Locations_idGetReturn} The `location` key in the reply contains a Location object with this structure
		 */
		Locations_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Locations_idGetReturn> {
			return this.http.get<Locations_idGetReturn>(this.baseUri + 'locations/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Networks
		 * Gets all existing networks that you have available.
		 * Get networks
		 * @param {string} name Can be used to filter networks by their name. The response will only contain the networks matching the specified name.
		 * @param {string} label_selector Can be used to filter networks by labels. The response will only contain networks with a matching label selector pattern.
		 * @return {NetworksGetByNameAndLabel_selectorReturn} The `networks` key contains a list of networks
		 */
		NetworksGetByNameAndLabel_selector(name: string | null | undefined, label_selector: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<NetworksGetByNameAndLabel_selectorReturn> {
			return this.http.get<NetworksGetByNameAndLabel_selectorReturn>(this.baseUri + 'networks?name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Network
		 * Creates a network with the specified `ip_range`.
		 * You may specify one or more `subnets`. You can also add more Subnets later by using the [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` in the subnet we will automatically pick the first available /24 range for you.
		 * You may specify one or more routes in `routes`. You can also add more routes later by using the [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).
		 * Post networks
		 * @return {void} 
		 */
		NetworksPost(requestBody: NetworksPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Network
		 * Deletes a network. If there are Servers attached they will be detached in the background.
		 * Note: if the network object changes during the request, the response will be a “conflict” error.
		 * Delete networks/{id}
		 * @param {number} id ID of the network
		 * @return {void} 
		 */
		Networks_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Network
		 * Gets a specific network object.
		 * Get networks/{id}
		 * @param {number} id ID of the network
		 * @return {Networks_idGetReturn} The `network` key contains the network
		 */
		Networks_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Networks_idGetReturn> {
			return this.http.get<Networks_idGetReturn>(this.baseUri + 'networks/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Network
		 * Updates the network properties.
		 * Note that when updating labels, the network’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Note: if the network object changes during the request, the response will be a “conflict” error.
		 * Put networks/{id}
		 * @param {number} id ID of the network
		 * @return {Networks_idPutReturn} The `network` key contains the updated network
		 */
		Networks_idPut(id: number, requestBody: Networks_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Networks_idPutReturn> {
			return this.http.put<Networks_idPutReturn>(this.baseUri + 'networks/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Network
		 * Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
		 * Get networks/{id}/actions
		 * @param {number} id ID of the Network
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Networks_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Networks_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Networks_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Networks_idActionsGetBySortAndStatusReturn>(this.baseUri + 'networks/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a route to a Network
		 * Adds a route entry to a Network.
		 * Note: if the Network object changes during the request, the response will be a “conflict” error.
		 * Post networks/{id}/actions/add_route
		 * @param {number} id ID of the Network
		 * @return {void} 
		 */
		Networks_idActionsAdd_routePost(id: number, requestBody: Networks_idActionsAdd_routePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + id + '/actions/add_route', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a subnet to a Network
		 * Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
		 * Note: if the parent Network object changes during the request, the response will be a “conflict” error.
		 * Post networks/{id}/actions/add_subnet
		 * @param {number} id ID of the Network
		 * @return {void} 
		 */
		Networks_idActionsAdd_subnetPost(id: number, requestBody: Networks_idActionsAdd_subnetPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + id + '/actions/add_subnet', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change IP range of a Network
		 * Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
		 * For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
		 * After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
		 * Note: if the Network object changes during the request, the response will be a “conflict” error.
		 * Post networks/{id}/actions/change_ip_range
		 * @param {number} id ID of the Network
		 * @return {void} 
		 */
		Networks_idActionsChange_ip_rangePost(id: number, requestBody: Networks_idActionsChange_ip_rangePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + id + '/actions/change_ip_range', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Network Protection
		 * Changes the protection configuration of a Network.
		 * Note: if the Network object changes during the request, the response will be a “conflict” error.
		 * Post networks/{id}/actions/change_protection
		 * @param {number} id ID of the Network
		 * @return {void} 
		 */
		Networks_idActionsChange_protectionPost(id: number, requestBody: Networks_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a route from a Network
		 * Delete a route entry from a Network.
		 * Note: if the Network object changes during the request, the response will be a “conflict” error.
		 * Post networks/{id}/actions/delete_route
		 * @param {number} id ID of the Network
		 * @return {void} 
		 */
		Networks_idActionsDelete_routePost(id: number, requestBody: Networks_idActionsDelete_routePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + id + '/actions/delete_route', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a subnet from a Network
		 * Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
		 * Note: if the Network object changes during the request, the response will be a “conflict” error.
		 * Post networks/{id}/actions/delete_subnet
		 * @param {number} id ID of the Network
		 * @return {void} 
		 */
		Networks_idActionsDelete_subnetPost(id: number, requestBody: Networks_idActionsDelete_subnetPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + id + '/actions/delete_subnet', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Network
		 * Returns a specific Action for a Network.
		 * Get networks/{id}/actions/{action_id}
		 * @param {number} id ID of the Network
		 * @param {number} action_id ID of the Action
		 * @return {Networks_idActions_action_idGetReturn} The `action` key contains the Network Action
		 */
		Networks_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Networks_idActions_action_idGetReturn> {
			return this.http.get<Networks_idActions_action_idGetReturn>(this.baseUri + 'networks/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all PlacementGroups
		 * Returns all PlacementGroup objects.
		 * Get placement_groups
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @param {Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType} type Can be used multiple times. The response will only contain PlacementGroups matching the type.
		 * @return {Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturn} The `placement_groups` key contains an array of PlacementGroup objects
		 */
		Placement_groupsGetBySortAndNameAndLabel_selectorAndType(sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, name: string | null | undefined, label_selector: string | null | undefined, type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined, headersHandler?: () => HttpHeaders): Observable<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturn> {
			return this.http.get<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturn>(this.baseUri + 'placement_groups?sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)) + '&type=' + type, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a PlacementGroup
		 * Creates a new PlacementGroup.
		 * Post placement_groups
		 * @return {void} 
		 */
		Placement_groupsPost(requestBody: Placement_groupsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'placement_groups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a PlacementGroup
		 * Deletes a PlacementGroup.
		 * Delete placement_groups/{id}
		 * @param {number} id ID of the resource
		 * @return {void} 
		 */
		Placement_groups_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'placement_groups/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a PlacementGroup
		 * Gets a specific PlacementGroup object.
		 * Get placement_groups/{id}
		 * @param {number} id ID of the resource
		 * @return {Placement_groups_idGetReturn} The `placement_group` key contains a PlacementGroup object
		 */
		Placement_groups_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Placement_groups_idGetReturn> {
			return this.http.get<Placement_groups_idGetReturn>(this.baseUri + 'placement_groups/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a PlacementGroup
		 * Updates the PlacementGroup properties.
		 * Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
		 * Put placement_groups/{id}
		 * @param {number} id ID of the resource
		 * @return {Placement_groups_idPutReturn} The `certificate` key contains the PlacementGroup that was just updated
		 */
		Placement_groups_idPut(id: number, requestBody: Placement_groups_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Placement_groups_idPutReturn> {
			return this.http.put<Placement_groups_idPutReturn>(this.baseUri + 'placement_groups/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all prices
		 * Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.
		 * Both net and gross prices are included in the response.
		 * Get pricing
		 * @return {PricingGetReturn} The `pricing` key in the reply contains an pricing object with this structure
		 */
		PricingGet(headersHandler?: () => HttpHeaders): Observable<PricingGetReturn> {
			return this.http.get<PricingGetReturn>(this.baseUri + 'pricing', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Primary IPs
		 * Returns all Primary IP objects.
		 * Get primary_ips
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @param {string} ip Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip.
		 * @param {Floating_ipsGetByNameAndLabel_selectorAndSortSort} sort Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc
		 * @return {Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturn} The `primary_ips` key contains an array of Primary IP objects
		 */
		Primary_ipsGetByNameAndLabel_selectorAndIpAndSort(name: string | null | undefined, label_selector: string | null | undefined, ip: string | null | undefined, sort: Floating_ipsGetByNameAndLabel_selectorAndSortSort | null | undefined, headersHandler?: () => HttpHeaders): Observable<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturn> {
			return this.http.get<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturn>(this.baseUri + 'primary_ips?name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&sort=' + sort, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Primary IP
		 * Creates a new Primary IP, optionally assigned to a Server.
		 * If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.
		 * Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.
		 * #### Call specific error codes
		 * | Code                          | Description                                                   |
		 * |------------------------------ |-------------------------------------------------------------- |
		 * | `server_not_stopped`          | The specified server is running, but needs to be powered off  |
		 * | `server_has_ipv4`             | The server already has an ipv4 address                        |
		 * | `server_has_ipv6`             | The server already has an ipv6 address                        |
		 * Post primary_ips
		 * @param {Primary_ipsPostPostBody} requestBody The `type` argument is required while `datacenter` and `assignee_id` are mutually exclusive.
		 * @return {void} 
		 */
		Primary_ipsPost(requestBody: Primary_ipsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'primary_ips', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Primary IP
		 * Deletes a Primary IP.
		 * The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.
		 * Delete primary_ips/{id}
		 * @param {number} id ID of the resource
		 * @return {void} 
		 */
		Primary_ips_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'primary_ips/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Primary IP
		 * Returns a specific Primary IP object.
		 * Get primary_ips/{id}
		 * @param {number} id ID of the resource
		 * @return {Primary_ips_idGetReturn} The `primary_ip` key contains a Primary IP object
		 */
		Primary_ips_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Primary_ips_idGetReturn> {
			return this.http.get<Primary_ips_idGetReturn>(this.baseUri + 'primary_ips/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Primary IP
		 * Updates the Primary IP.
		 * Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * If the Primary IP object changes during the request, the response will be a “conflict” error.
		 * Put primary_ips/{id}
		 * @param {number} id ID of the resource
		 * @return {Primary_ips_idPutReturn} The `primary_ip` key contains the Primary IP that was just updated
		 */
		Primary_ips_idPut(id: number, requestBody: Primary_ips_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Primary_ips_idPutReturn> {
			return this.http.put<Primary_ips_idPutReturn>(this.baseUri + 'primary_ips/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Assign a Primary IP to a resource
		 * Assigns a Primary IP to a Server.
		 * A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.
		 * The Server must be powered off (status `off`) in order for this operation to succeed.
		 * #### Call specific error codes
		 * | Code                          | Description                                                   |
		 * |------------------------------ |-------------------------------------------------------------- |
		 * | `server_not_stopped`          | The server is running, but needs to be powered off            |
		 * | `primary_ip_already_assigned` | Primary ip is already assigned to a different server          |
		 * | `server_has_ipv4`             | The server already has an ipv4 address                        |
		 * | `server_has_ipv6`             | The server already has an ipv6 address                        |
		 * Post primary_ips/{id}/actions/assign
		 * @param {number} id ID of the Primary IP
		 * @return {void} 
		 */
		Primary_ips_idActionsAssignPost(id: number, requestBody: Primary_ips_idActionsAssignPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'primary_ips/' + id + '/actions/assign', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change reverse DNS entry for a Primary IP
		 * Changes the hostname that will appear when getting the hostname belonging to this Primary IP.
		 * Post primary_ips/{id}/actions/change_dns_ptr
		 * @param {number} id ID of the Primary IP
		 * @param {Primary_ips_idActionsChange_dns_ptrPostPostBody} requestBody Select the IP address for which to change the DNS entry by passing `ip`. For a Primary IP of type `ipv4` this must exactly match the IP address of the Primary IP. For a Primary IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Primary IP. You can add up to 100 IPv6 reverse DNS entries.
		 * The target hostname is set by passing `dns_ptr`.
		 * @return {void} 
		 */
		Primary_ips_idActionsChange_dns_ptrPost(id: number, requestBody: Primary_ips_idActionsChange_dns_ptrPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'primary_ips/' + id + '/actions/change_dns_ptr', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Primary IP Protection
		 * Changes the protection configuration of a Primary IP.
		 * A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.
		 * Post primary_ips/{id}/actions/change_protection
		 * @param {number} id ID of the Primary IP
		 * @return {void} 
		 */
		Primary_ips_idActionsChange_protectionPost(id: number, requestBody: Primary_ips_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'primary_ips/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unassign a Primary IP from a resource
		 * Unassigns a Primary IP from a Server.
		 * The Server must be powered off (status `off`) in order for this operation to succeed.
		 * Note that only Servers that have at least one network interface (public or private) attached can be powered on.
		 * #### Call specific error codes
		 * | Code                              | Description                                                   |
		 * |---------------------------------- |-------------------------------------------------------------- |
		 * | `server_not_stopped`              | The server is running, but needs to be powered off            |
		 * | `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |
		 * Post primary_ips/{id}/actions/unassign
		 * @param {number} id ID of the Primary IP
		 * @return {void} 
		 */
		Primary_ips_idActionsUnassignPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'primary_ips/' + id + '/actions/unassign', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Server Types
		 * Gets all Server type objects.
		 * Get server_types
		 * @param {string} name Can be used to filter Server types by their name. The response will only contain the Server type matching the specified name.
		 * @return {Server_typesGetByNameReturn} The `server_types` key in the reply contains an array of Server type objects with this structure
		 */
		Server_typesGetByName(name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Server_typesGetByNameReturn> {
			return this.http.get<Server_typesGetByNameReturn>(this.baseUri + 'server_types?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a Server Type
		 * Gets a specific Server type object.
		 * Get server_types/{id}
		 * @param {number} id ID of Server Type
		 * @return {Server_types_idGetReturn} The `server_type` key in the reply contains a Server type object with this structure
		 */
		Server_types_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Server_types_idGetReturn> {
			return this.http.get<Server_types_idGetReturn>(this.baseUri + 'server_types/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Servers
		 * Returns all existing Server objects
		 * Get servers
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {ServersGetByNameAndLabel_selectorAndSortAndStatusStatus} status Can be used multiple times. The response will only contain Server matching the status
		 * @return {ServersGetByNameAndLabel_selectorAndSortAndStatusReturn} A paged array of servers
		 */
		ServersGetByNameAndLabel_selectorAndSortAndStatus(name: string | null | undefined, label_selector: string | null | undefined, sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, status: ServersGetByNameAndLabel_selectorAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServersGetByNameAndLabel_selectorAndSortAndStatusReturn> {
			return this.http.get<ServersGetByNameAndLabel_selectorAndSortAndStatusReturn>(this.baseUri + 'servers?name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)) + '&sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Server
		 * Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.
		 * Post servers
		 * @param {ServersPostPostBody} requestBody Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
		 * For `server_type` you can either use the ID as listed in `/server_types` or its name.
		 * For `image` you can either use the ID as listed in `/images` or its name.
		 * If you want to create the Server in a Location, you must set `location` to the ID or name as listed in `/locations`. This is the recommended way. You can be even more specific by setting `datacenter` to the ID or name as listed in `/datacenters`. However we only recommend this if you want to assign a specific Primary IP to the Server which is located in the specified Datacenter.
		 * Some properties like `start_after_create` or `automount` will trigger Actions after the Server is created. Those Actions are listed in the `next_actions` field in the response.
		 * For accessing your Server we strongly recommend to use SSH keys by passing the respective key IDs in `ssh_keys`. If you do not specify any `ssh_keys` we will generate a root password for you and return it in the response.
		 * Please note that provided user-data is stored in our systems. While we take measures to protect it we highly recommend that you don’t use it to store passwords or other sensitive information.
		 * #### Call specific error codes
		 * | Code                             | Description                                                |
		 * |----------------------------------|------------------------------------------------------------|
		 * | `placement_error`                | An error during the placement occurred                     |
		 * | `primary_ip_assigned`            | The specified Primary IP is already assigned to a server   |
		 * | `primary_ip_datacenter_mismatch` | The specified Primary IP is in a different datacenter      |
		 * | `primary_ip_version_mismatch`    | The specified Primary IP has the wrong IP Version          |
		 * @return {void} 
		 */
		ServersPost(requestBody: ServersPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Server
		 * Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.
		 * Delete servers/{id}
		 * @param {number} id ID of the Server
		 * @return {Servers_idDeleteReturn} The `action` key in the reply contains an Action object with this structure
		 */
		Servers_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Servers_idDeleteReturn> {
			return this.http.delete<Servers_idDeleteReturn>(this.baseUri + 'servers/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a Server
		 * Returns a specific Server object. The Server must exist inside the Project
		 * Get servers/{id}
		 * @param {number} id ID of the Server
		 * @return {Servers_idGetReturn} The `server` key in the reply contains a Server object with this structure
		 */
		Servers_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Servers_idGetReturn> {
			return this.http.get<Servers_idGetReturn>(this.baseUri + 'servers/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Server
		 * Updates a Server. You can update a Server’s name and a Server’s labels.
		 * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
		 * Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Put servers/{id}
		 * @param {number} id ID of the Server
		 * @return {Servers_idPutReturn} The `server` key in the reply contains the updated Server
		 */
		Servers_idPut(id: number, requestBody: Servers_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Servers_idPutReturn> {
			return this.http.put<Servers_idPutReturn>(this.baseUri + 'servers/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Server
		 * Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
		 * Get servers/{id}/actions
		 * @param {number} id ID of the Resource
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Servers_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Servers_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Servers_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Servers_idActionsGetBySortAndStatusReturn>(this.baseUri + 'servers/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Server to a Placement Group
		 * Adds a Server to a Placement Group.
		 * Server must be powered off for this command to succeed.
		 * #### Call specific error codes
		 * | Code                          | Description                                                          |
		 * |-------------------------------|----------------------------------------------------------------------|
		 * | `server_not_stopped`          | The action requires a stopped server                                 |
		 * Post servers/{id}/actions/add_to_placement_group
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsAdd_to_placement_groupPost(id: number, requestBody: Servers_idActionsAdd_to_placement_groupPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/add_to_placement_group', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Attach an ISO to a Server
		 * Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
		 * Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
		 * Post servers/{id}/actions/attach_iso
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsAttach_isoPost(id: number, requestBody: Servers_idActionsAttach_isoPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/attach_iso', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Attach a Server to a Network
		 * Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
		 * The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
		 * Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
		 * **Call specific error codes**
		 * | Code                             | Description                                                           |
		 * |----------------------------------|-----------------------------------------------------------------------|
		 * | `server_already_attached`        | The server is already attached to the network                         |
		 * | `ip_not_available`               | The provided Network IP is not available                              |
		 * | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
		 * | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
		 * Post servers/{id}/actions/attach_to_network
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsAttach_to_networkPost(id: number, requestBody: Servers_idActionsAttach_to_networkPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/attach_to_network', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change alias IPs of a Network
		 * Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
		 * Post servers/{id}/actions/change_alias_ips
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsChange_alias_ipsPost(id: number, requestBody: Servers_idActionsChange_alias_ipsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/change_alias_ips', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change reverse DNS entry for this Server
		 * Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
		 * Floating IPs assigned to the Server are not affected by this.
		 * Post servers/{id}/actions/change_dns_ptr
		 * @param {number} id ID of the Server
		 * @param {Servers_idActionsChange_dns_ptrPostPostBody} requestBody Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
		 * @return {void} 
		 */
		Servers_idActionsChange_dns_ptrPost(id: number, requestBody: Servers_idActionsChange_dns_ptrPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/change_dns_ptr', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Server Protection
		 * Changes the protection configuration of the Server.
		 * Post servers/{id}/actions/change_protection
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsChange_protectionPost(id: number, requestBody: Servers_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change the Type of a Server
		 * Changes the type (Cores, RAM and disk sizes) of a Server.
		 * Server must be powered off for this command to succeed.
		 * This copies the content of its disk, and starts it again.
		 * You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
		 * If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
		 * #### Call specific error codes
		 * | Code                          | Description                                                          |
		 * |-------------------------------|----------------------------------------------------------------------|
		 * | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
		 * | `server_not_stopped`          | The action requires a stopped server                                 |
		 * Post servers/{id}/actions/change_type
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsChange_typePost(id: number, requestBody: Servers_idActionsChange_typePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/change_type', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Image from a Server
		 * Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
		 * To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
		 * You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
		 * Post servers/{id}/actions/create_image
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsCreate_imagePost(id: number, requestBody: Servers_idActionsCreate_imagePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/create_image', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Detach a Server from a Network
		 * Detaches a Server from a network. The interface for this network will vanish.
		 * Post servers/{id}/actions/detach_from_network
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsDetach_from_networkPost(id: number, requestBody: Servers_idActionsDetach_from_networkPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/detach_from_network', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Detach an ISO from a Server
		 * Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
		 * Post servers/{id}/actions/detach_iso
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsDetach_isoPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/detach_iso', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable Backups for a Server
		 * Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
		 * Caution: This immediately removes all existing backups for the Server!
		 * Post servers/{id}/actions/disable_backup
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsDisable_backupPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/disable_backup', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable Rescue Mode for a Server
		 * Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
		 * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
		 * Disabling rescue mode will not reboot your Server — you will have to do this yourself.
		 * Post servers/{id}/actions/disable_rescue
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsDisable_rescuePost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/disable_rescue', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable and Configure Backups for a Server
		 * Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
		 * Backups are automatically created daily.
		 * Post servers/{id}/actions/enable_backup
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsEnable_backupPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/enable_backup', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable Rescue Mode for a Server
		 * Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
		 * In case a Server cannot boot on its own you can use this to access a Server’s disks.
		 * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
		 * Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
		 * Post servers/{id}/actions/enable_rescue
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsEnable_rescuePost(id: number, requestBody: Servers_idActionsEnable_rescuePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/enable_rescue', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Power off a Server
		 * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
		 * Post servers/{id}/actions/poweroff
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsPoweroffPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/poweroff', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Power on a Server
		 * Starts a Server by turning its power on.
		 * Post servers/{id}/actions/poweron
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsPoweronPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/poweron', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Soft-reboot a Server
		 * Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
		 * Post servers/{id}/actions/reboot
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsRebootPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/reboot', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rebuild a Server from an Image
		 * Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
		 * The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
		 * Your Server will automatically be powered off before the rebuild command executes.
		 * Post servers/{id}/actions/rebuild
		 * @param {number} id ID of the Server
		 * @param {Servers_idActionsRebuildPostPostBody} requestBody To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.
		 * @return {void} 
		 */
		Servers_idActionsRebuildPost(id: number, requestBody: Servers_idActionsRebuildPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/rebuild', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove from Placement Group
		 * Removes a Server from a Placement Group.
		 * Post servers/{id}/actions/remove_from_placement_group
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsRemove_from_placement_groupPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/remove_from_placement_group', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Console for a Server
		 * Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
		 * Post servers/{id}/actions/request_console
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsRequest_consolePost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/request_console', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset a Server
		 * Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
		 * Post servers/{id}/actions/reset
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsResetPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset root Password of a Server
		 * Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.
		 * This will generate a new password for this Server and return it.
		 * If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
		 * Post servers/{id}/actions/reset_password
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsReset_passwordPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/reset_password', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Shutdown a Server
		 * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.
		 * Post servers/{id}/actions/shutdown
		 * @param {number} id ID of the Server
		 * @return {void} 
		 */
		Servers_idActionsShutdownPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servers/' + id + '/actions/shutdown', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Server
		 * Returns a specific Action object for a Server.
		 * Get servers/{id}/actions/{action_id}
		 * @param {number} id ID of the Server
		 * @param {number} action_id ID of the Action
		 * @return {Servers_idActions_action_idGetReturn} The `action` key in the reply has this structure
		 */
		Servers_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Servers_idActions_action_idGetReturn> {
			return this.http.get<Servers_idActions_action_idGetReturn>(this.baseUri + 'servers/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Metrics for a Server
		 * Get Metrics for specified Server.
		 * You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.
		 * Depending on the type you will get different time series data
		 * | Type    | Timeseries              | Unit      | Description                                          |
		 * |---------|-------------------------|-----------|------------------------------------------------------|
		 * | cpu     | cpu                     | percent   | Percent CPU usage                                    |
		 * | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
		 * |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
		 * |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
		 * |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
		 * | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
		 * |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
		 * |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
		 * |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
		 * Metrics are available for the last 30 days only.
		 * If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.
		 * We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.
		 * Get servers/{id}/metrics
		 * @param {number} id ID of the Server
		 * @param {Servers_idMetricsGetByTypeAndStartAndEndAndStepType} type Type of metrics to get
		 * @param {string} start Start of period to get Metrics for (in ISO-8601 format)
		 * @param {string} end End of period to get Metrics for (in ISO-8601 format)
		 * @param {string} step Resolution of results in seconds
		 * @return {Servers_idMetricsGetByTypeAndStartAndEndAndStepReturn} The `metrics` key in the reply contains a metrics object with this structure
		 */
		Servers_idMetricsGetByTypeAndStartAndEndAndStep(id: number, type: Servers_idMetricsGetByTypeAndStartAndEndAndStepType, start: string, end: string, step: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Servers_idMetricsGetByTypeAndStartAndEndAndStepReturn> {
			return this.http.get<Servers_idMetricsGetByTypeAndStartAndEndAndStepReturn>(this.baseUri + 'servers/' + id + '/metrics?type=' + type + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&step=' + (step == null ? '' : encodeURIComponent(step)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all SSH keys
		 * Returns all SSH key objects.
		 * Get ssh_keys
		 * @param {Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorSort} sort Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} fingerprint Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @return {Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturn} The `ssh_keys` key in the reply contains an array of SSH key objects with this structure
		 */
		Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selector(sort: Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorSort | null | undefined, name: string | null | undefined, fingerprint: string | null | undefined, label_selector: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturn> {
			return this.http.get<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturn>(this.baseUri + 'ssh_keys?sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an SSH key
		 * Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.
		 * Post ssh_keys
		 * @return {void} 
		 */
		Ssh_keysPost(requestBody: Ssh_keysPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ssh_keys', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an SSH key
		 * Deletes an SSH key. It cannot be used anymore.
		 * Delete ssh_keys/{id}
		 * @param {string} id ID of the SSH key
		 * @return {void} 
		 */
		Ssh_keys_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ssh_keys/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a SSH key
		 * Returns a specific SSH key object.
		 * Get ssh_keys/{id}
		 * @param {number} id ID of the SSH key
		 * @return {Ssh_keys_idGetReturn} The `ssh_key` key in the reply contains an SSH key object with this structure
		 */
		Ssh_keys_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Ssh_keys_idGetReturn> {
			return this.http.get<Ssh_keys_idGetReturn>(this.baseUri + 'ssh_keys/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an SSH key
		 * Updates an SSH key. You can update an SSH key name and an SSH key labels.
		 * Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Put ssh_keys/{id}
		 * @param {string} id ID of the SSH key
		 * @return {Ssh_keys_idPutReturn} The `ssh_key` key in the reply contains the modified SSH key object with the new description
		 */
		Ssh_keys_idPut(id: string, requestBody: Ssh_keys_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Ssh_keys_idPutReturn> {
			return this.http.put<Ssh_keys_idPutReturn>(this.baseUri + 'ssh_keys/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Volumes
		 * Gets all existing Volumes that you have available.
		 * Get volumes
		 * @param {ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureStatus} status Can be used multiple times. The response will only contain Volumes matching the status.
		 * @param {CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort} sort Can be used multiple times.
		 * @param {string} name Can be used to filter resources by their name. The response will only contain the resources matching the specified name
		 * @param {string} label_selector Can be used to filter resources by labels. The response will only contain resources matching the label selector.
		 * @return {VolumesGetByStatusAndSortAndNameAndLabel_selectorReturn} The `volumes` key contains a list of volumes
		 */
		VolumesGetByStatusAndSortAndNameAndLabel_selector(status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureStatus | null | undefined, sort: CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort | null | undefined, name: string | null | undefined, label_selector: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturn> {
			return this.http.get<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturn>(this.baseUri + 'volumes?status=' + status + '&sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&label_selector=' + (label_selector == null ? '' : encodeURIComponent(label_selector)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Volume
		 * Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.
		 * Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.
		 * The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).
		 * A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.
		 * #### Call specific error codes
		 * | Code                                | Description                                         |
		 * |-------------------------------------|-----------------------------------------------------|
		 * | `no_space_left_in_location`         | There is no volume space left in the given location |
		 * Post volumes
		 * @return {void} 
		 */
		VolumesPost(requestBody: VolumesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Volume
		 * Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.
		 * Delete volumes/{id}
		 * @param {string} id ID of the Volume
		 * @return {void} 
		 */
		Volumes_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'volumes/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Volume
		 * Gets a specific Volume object.
		 * Get volumes/{id}
		 * @param {number} id ID of the Volume
		 * @return {Volumes_idGetReturn} The `volume` key contains the volume
		 */
		Volumes_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Volumes_idGetReturn> {
			return this.http.get<Volumes_idGetReturn>(this.baseUri + 'volumes/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Volume
		 * Updates the Volume properties.
		 * Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
		 * Put volumes/{id}
		 * @param {string} id ID of the Volume to update
		 * @return {Volumes_idPutReturn} The `volume` key contains the updated volume
		 */
		Volumes_idPut(id: string, requestBody: Volumes_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<Volumes_idPutReturn> {
			return this.http.put<Volumes_idPutReturn>(this.baseUri + 'volumes/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get all Actions for a Volume
		 * Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
		 * Get volumes/{id}/actions
		 * @param {number} id ID of the Volume
		 * @param {ActionsGetByIdAndSortAndStatusSort} sort Can be used multiple times.
		 * @param {ActionsGetByIdAndSortAndStatusStatus} status Can be used multiple times, the response will contain only Actions with specified statuses
		 * @return {Volumes_idActionsGetBySortAndStatusReturn} The `actions` key contains a list of Actions
		 */
		Volumes_idActionsGetBySortAndStatus(id: number, sort: ActionsGetByIdAndSortAndStatusSort | null | undefined, status: ActionsGetByIdAndSortAndStatusStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Volumes_idActionsGetBySortAndStatusReturn> {
			return this.http.get<Volumes_idActionsGetBySortAndStatusReturn>(this.baseUri + 'volumes/' + id + '/actions?sort=' + sort + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Attach Volume to a Server
		 * Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.
		 * Post volumes/{id}/actions/attach
		 * @param {number} id ID of the Volume
		 * @return {void} 
		 */
		Volumes_idActionsAttachPost(id: number, requestBody: Volumes_idActionsAttachPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/' + id + '/actions/attach', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Volume Protection
		 * Changes the protection configuration of a Volume.
		 * Post volumes/{id}/actions/change_protection
		 * @param {number} id ID of the Volume
		 * @return {void} 
		 */
		Volumes_idActionsChange_protectionPost(id: number, requestBody: Volumes_idActionsChange_protectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/' + id + '/actions/change_protection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Detach Volume
		 * Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.
		 * Post volumes/{id}/actions/detach
		 * @param {number} id ID of the Volume
		 * @return {void} 
		 */
		Volumes_idActionsDetachPost(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/' + id + '/actions/detach', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resize Volume
		 * Changes the size of a Volume. Note that downsizing a Volume is not possible.
		 * Post volumes/{id}/actions/resize
		 * @param {number} id ID of the Volume
		 * @return {void} 
		 */
		Volumes_idActionsResizePost(id: number, requestBody: Volumes_idActionsResizePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/' + id + '/actions/resize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Action for a Volume
		 * Returns a specific Action for a Volume.
		 * Get volumes/{id}/actions/{action_id}
		 * @param {number} id ID of the Volume
		 * @param {number} action_id ID of the Action
		 * @return {Volumes_idActions_action_idGetReturn} The `action` key contains the Volume Action
		 */
		Volumes_idActions_action_idGet(id: number, action_id: number, headersHandler?: () => HttpHeaders): Observable<Volumes_idActions_action_idGetReturn> {
			return this.http.get<Volumes_idActions_action_idGetReturn>(this.baseUri + 'volumes/' + id + '/actions/' + action_id, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ActionsGetByIdAndSortAndStatusSort { id = 'id', 'id:asc' = 'id:asc', 'id:desc' = 'id:desc', command = 'command', 'command:asc' = 'command:asc', 'command:desc' = 'command:desc', status = 'status', 'status:asc' = 'status:asc', 'status:desc' = 'status:desc', progress = 'progress', 'progress:asc' = 'progress:asc', 'progress:desc' = 'progress:desc', started = 'started', 'started:asc' = 'started:asc', 'started:desc' = 'started:desc', finished = 'finished', 'finished:asc' = 'finished:asc', 'finished:desc' = 'finished:desc' }

	export enum ActionsGetByIdAndSortAndStatusStatus { running = 'running', success = 'success', error = 'error' }

	export interface ActionsGetByIdAndSortAndStatusReturn {

		/** Required */
		ActionsGetByIdAndSortAndStatusReturnActions: Array<ActionsGetByIdAndSortAndStatusReturnActions>;
		meta?: ActionsGetByIdAndSortAndStatusReturnMeta;
	}
	export interface ActionsGetByIdAndSortAndStatusReturnFormProperties {
	}
	export function CreateActionsGetByIdAndSortAndStatusReturnFormGroup() {
		return new FormGroup<ActionsGetByIdAndSortAndStatusReturnFormProperties>({
		});

	}

	export interface ActionsGetByIdAndSortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: ActionsGetByIdAndSortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		ActionsGetByIdAndSortAndStatusReturnActionsResources: Array<ActionsGetByIdAndSortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface ActionsGetByIdAndSortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateActionsGetByIdAndSortAndStatusReturnActionsFormGroup() {
		return new FormGroup<ActionsGetByIdAndSortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionsGetByIdAndSortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface ActionsGetByIdAndSortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateActionsGetByIdAndSortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<ActionsGetByIdAndSortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionsGetByIdAndSortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface ActionsGetByIdAndSortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActionsGetByIdAndSortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<ActionsGetByIdAndSortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionsGetByIdAndSortAndStatusReturnActionsStatus { success = 'success', running = 'running', error = 'error' }

	export interface ActionsGetByIdAndSortAndStatusReturnMeta {

		/** Required */
		pagination: ActionsGetByIdAndSortAndStatusReturnMetaPagination;
	}
	export interface ActionsGetByIdAndSortAndStatusReturnMetaFormProperties {
	}
	export function CreateActionsGetByIdAndSortAndStatusReturnMetaFormGroup() {
		return new FormGroup<ActionsGetByIdAndSortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface ActionsGetByIdAndSortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface ActionsGetByIdAndSortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateActionsGetByIdAndSortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<ActionsGetByIdAndSortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Actions_idGetReturn {

		/** Required */
		action: Actions_idGetReturnAction;
	}
	export interface Actions_idGetReturnFormProperties {
	}
	export function CreateActions_idGetReturnFormGroup() {
		return new FormGroup<Actions_idGetReturnFormProperties>({
		});

	}

	export interface Actions_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Actions_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Actions_idGetReturnActionResources: Array<Actions_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Actions_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateActions_idGetReturnActionFormGroup() {
		return new FormGroup<Actions_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Actions_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Actions_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateActions_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Actions_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Actions_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Actions_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActions_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Actions_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificatesGetBySortAndNameAndLabel_selectorAndTypeSort { id = 'id', 'id:asc' = 'id:asc', 'id:desc' = 'id:desc', name = 'name', 'name:asc' = 'name:asc', 'name:desc' = 'name:desc', created = 'created', 'created:asc' = 'created:asc', 'created:desc' = 'created:desc' }

	export enum CertificatesGetBySortAndNameAndLabel_selectorAndTypeType { uploaded = 'uploaded', managed = 'managed' }

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturn {

		/** Required */
		CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificates: Array<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificates>;
		meta?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMeta;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnFormProperties {
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnFormProperties>({
		});

	}

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificates {

		/**
		 * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
		 * Required
		 */
		certificate: string;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Domains and subdomains covered by the Certificate
		 * Required
		 */
		domain_names: Array<string>;

		/**
		 * SHA256 fingerprint of the Certificate
		 * Required
		 */
		fingerprint: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Point in time when the Certificate stops being valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_after: string;

		/**
		 * Point in time when the Certificate becomes valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_before: string;

		/** Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates */
		status?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatus;

		/** Type of the Certificate */
		type?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null;

		/**
		 * Resources currently using the Certificate
		 * Required
		 */
		CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesUsed_by: Array<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesUsed_by>;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesFormProperties {

		/**
		 * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
		 * Required
		 */
		certificate: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * SHA256 fingerprint of the Certificate
		 * Required
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Certificate stops being valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_after: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Certificate becomes valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_before: FormControl<string | null | undefined>,

		/** Type of the Certificate */
		type: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_valid_after: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_valid_before: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined),
		});

	}

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatus {

		/** If issuance or renewal reports `failed`, this property contains information about what happened */
		error?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusError;

		/** Status of the issuance process of the Certificate */
		issuance?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null;

		/** Status of the renewal process of the Certificate. */
		renewal?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusFormProperties {

		/** Status of the issuance process of the Certificate */
		issuance: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null | undefined>,

		/** Status of the renewal process of the Certificate. */
		renewal: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null | undefined>,
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusFormProperties>({
			issuance: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null | undefined>(undefined),
			renewal: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null | undefined>(undefined),
		});

	}

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusError {
		code?: string | null;
		message?: string | null;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusErrorFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance { pending = 'pending', completed = 'completed', failed = 'failed' }

	export enum CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal { scheduled = 'scheduled', pending = 'pending', failed = 'failed', unavailable = 'unavailable' }

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesUsed_by {

		/**
		 * ID of resource referenced
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesUsed_byFormProperties {

		/**
		 * ID of resource referenced
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesUsed_byFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesUsed_byFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMeta {

		/** Required */
		pagination: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPagination;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaFormProperties {
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaFormProperties>({
		});

	}

	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateCertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPaginationFormGroup() {
		return new FormGroup<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificatesPostPostBody {

		/** Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates. */
		certificate?: string | null;

		/** Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates. */
		domain_names?: Array<string>;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/**
		 * Name of the Certificate
		 * Required
		 */
		name: string;

		/** Certificate key in PEM format. Required for type `uploaded` Certificates. */
		private_key?: string | null;

		/** Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted defaults to `uploaded`. */
		type?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null;
	}
	export interface CertificatesPostPostBodyFormProperties {

		/** Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates. */
		certificate: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the Certificate
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Certificate key in PEM format. Required for type `uploaded` Certificates. */
		private_key: FormControl<string | null | undefined>,

		/** Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted defaults to `uploaded`. */
		type: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateCertificatesPostPostBodyFormGroup() {
		return new FormGroup<CertificatesPostPostBodyFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			private_key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined),
		});

	}

	export interface Certificates_idGetReturn {

		/** Required */
		certificate: Certificates_idGetReturnCertificate;
	}
	export interface Certificates_idGetReturnFormProperties {
	}
	export function CreateCertificates_idGetReturnFormGroup() {
		return new FormGroup<Certificates_idGetReturnFormProperties>({
		});

	}

	export interface Certificates_idGetReturnCertificate {

		/**
		 * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
		 * Required
		 */
		certificate: string;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Domains and subdomains covered by the Certificate
		 * Required
		 */
		domain_names: Array<string>;

		/**
		 * SHA256 fingerprint of the Certificate
		 * Required
		 */
		fingerprint: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Point in time when the Certificate stops being valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_after: string;

		/**
		 * Point in time when the Certificate becomes valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_before: string;

		/** Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates */
		status?: Certificates_idGetReturnCertificateStatus;

		/** Type of the Certificate */
		type?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null;

		/**
		 * Resources currently using the Certificate
		 * Required
		 */
		Certificates_idGetReturnCertificateUsed_by: Array<Certificates_idGetReturnCertificateUsed_by>;
	}
	export interface Certificates_idGetReturnCertificateFormProperties {

		/**
		 * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
		 * Required
		 */
		certificate: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * SHA256 fingerprint of the Certificate
		 * Required
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Certificate stops being valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_after: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Certificate becomes valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_before: FormControl<string | null | undefined>,

		/** Type of the Certificate */
		type: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateCertificates_idGetReturnCertificateFormGroup() {
		return new FormGroup<Certificates_idGetReturnCertificateFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_valid_after: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_valid_before: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined),
		});

	}

	export interface Certificates_idGetReturnCertificateStatus {

		/** If issuance or renewal reports `failed`, this property contains information about what happened */
		error?: Certificates_idGetReturnCertificateStatusError;

		/** Status of the issuance process of the Certificate */
		issuance?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null;

		/** Status of the renewal process of the Certificate. */
		renewal?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null;
	}
	export interface Certificates_idGetReturnCertificateStatusFormProperties {

		/** Status of the issuance process of the Certificate */
		issuance: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null | undefined>,

		/** Status of the renewal process of the Certificate. */
		renewal: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null | undefined>,
	}
	export function CreateCertificates_idGetReturnCertificateStatusFormGroup() {
		return new FormGroup<Certificates_idGetReturnCertificateStatusFormProperties>({
			issuance: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null | undefined>(undefined),
			renewal: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null | undefined>(undefined),
		});

	}

	export interface Certificates_idGetReturnCertificateStatusError {
		code?: string | null;
		message?: string | null;
	}
	export interface Certificates_idGetReturnCertificateStatusErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idGetReturnCertificateStatusErrorFormGroup() {
		return new FormGroup<Certificates_idGetReturnCertificateStatusErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Certificates_idGetReturnCertificateUsed_by {

		/**
		 * ID of resource referenced
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Certificates_idGetReturnCertificateUsed_byFormProperties {

		/**
		 * ID of resource referenced
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idGetReturnCertificateUsed_byFormGroup() {
		return new FormGroup<Certificates_idGetReturnCertificateUsed_byFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New Certificate name */
		name?: string | null;
	}
	export interface Certificates_idPutPutBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New Certificate name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idPutPutBodyFormGroup() {
		return new FormGroup<Certificates_idPutPutBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Certificates_idPutReturn {

		/** Required */
		certificate: Certificates_idPutReturnCertificate;
	}
	export interface Certificates_idPutReturnFormProperties {
	}
	export function CreateCertificates_idPutReturnFormGroup() {
		return new FormGroup<Certificates_idPutReturnFormProperties>({
		});

	}

	export interface Certificates_idPutReturnCertificate {

		/**
		 * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
		 * Required
		 */
		certificate: string;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Domains and subdomains covered by the Certificate
		 * Required
		 */
		domain_names: Array<string>;

		/**
		 * SHA256 fingerprint of the Certificate
		 * Required
		 */
		fingerprint: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Point in time when the Certificate stops being valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_after: string;

		/**
		 * Point in time when the Certificate becomes valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_before: string;

		/** Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates */
		status?: Certificates_idPutReturnCertificateStatus;

		/** Type of the Certificate */
		type?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null;

		/**
		 * Resources currently using the Certificate
		 * Required
		 */
		Certificates_idPutReturnCertificateUsed_by: Array<Certificates_idPutReturnCertificateUsed_by>;
	}
	export interface Certificates_idPutReturnCertificateFormProperties {

		/**
		 * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
		 * Required
		 */
		certificate: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * SHA256 fingerprint of the Certificate
		 * Required
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Certificate stops being valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_after: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Certificate becomes valid (in ISO-8601 format)
		 * Required
		 */
		not_valid_before: FormControl<string | null | undefined>,

		/** Type of the Certificate */
		type: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateCertificates_idPutReturnCertificateFormGroup() {
		return new FormGroup<Certificates_idPutReturnCertificateFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_valid_after: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_valid_before: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined),
		});

	}

	export interface Certificates_idPutReturnCertificateStatus {

		/** If issuance or renewal reports `failed`, this property contains information about what happened */
		error?: Certificates_idPutReturnCertificateStatusError;

		/** Status of the issuance process of the Certificate */
		issuance?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null;

		/** Status of the renewal process of the Certificate. */
		renewal?: CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null;
	}
	export interface Certificates_idPutReturnCertificateStatusFormProperties {

		/** Status of the issuance process of the Certificate */
		issuance: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null | undefined>,

		/** Status of the renewal process of the Certificate. */
		renewal: FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null | undefined>,
	}
	export function CreateCertificates_idPutReturnCertificateStatusFormGroup() {
		return new FormGroup<Certificates_idPutReturnCertificateStatusFormProperties>({
			issuance: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusIssuance | null | undefined>(undefined),
			renewal: new FormControl<CertificatesGetBySortAndNameAndLabel_selectorAndTypeReturnCertificatesStatusRenewal | null | undefined>(undefined),
		});

	}

	export interface Certificates_idPutReturnCertificateStatusError {
		code?: string | null;
		message?: string | null;
	}
	export interface Certificates_idPutReturnCertificateStatusErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idPutReturnCertificateStatusErrorFormGroup() {
		return new FormGroup<Certificates_idPutReturnCertificateStatusErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Certificates_idPutReturnCertificateUsed_by {

		/**
		 * ID of resource referenced
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Certificates_idPutReturnCertificateUsed_byFormProperties {

		/**
		 * ID of resource referenced
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idPutReturnCertificateUsed_byFormGroup() {
		return new FormGroup<Certificates_idPutReturnCertificateUsed_byFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActionsGetBySortAndStatusReturn {

		/** Required */
		Certificates_idActionsGetBySortAndStatusReturnActions: Array<Certificates_idActionsGetBySortAndStatusReturnActions>;
		meta?: Certificates_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Certificates_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateCertificates_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Certificates_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Certificates_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Certificates_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Certificates_idActionsGetBySortAndStatusReturnActionsResources: Array<Certificates_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Certificates_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateCertificates_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Certificates_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Certificates_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Certificates_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Certificates_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Certificates_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Certificates_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Certificates_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateCertificates_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Certificates_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Certificates_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Certificates_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateCertificates_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Certificates_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActions_action_idGetReturn {

		/** Required */
		action: Certificates_idActions_action_idGetReturnAction;
	}
	export interface Certificates_idActions_action_idGetReturnFormProperties {
	}
	export function CreateCertificates_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Certificates_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Certificates_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Certificates_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Certificates_idActions_action_idGetReturnActionResources: Array<Certificates_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Certificates_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateCertificates_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Certificates_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Certificates_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Certificates_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Certificates_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Certificates_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificates_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Certificates_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatacentersGetByNameReturn {

		/** Required */
		DatacentersGetByNameReturnDatacenters: Array<DatacentersGetByNameReturnDatacenters>;

		/**
		 * The Datacenter which is recommended to be used to create new Servers.
		 * Required
		 */
		recommendation: number;
	}
	export interface DatacentersGetByNameReturnFormProperties {

		/**
		 * The Datacenter which is recommended to be used to create new Servers.
		 * Required
		 */
		recommendation: FormControl<number | null | undefined>,
	}
	export function CreateDatacentersGetByNameReturnFormGroup() {
		return new FormGroup<DatacentersGetByNameReturnFormProperties>({
			recommendation: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatacentersGetByNameReturnDatacenters {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: DatacentersGetByNameReturnDatacentersLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: DatacentersGetByNameReturnDatacentersServer_types;
	}
	export interface DatacentersGetByNameReturnDatacentersFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatacentersGetByNameReturnDatacentersFormGroup() {
		return new FormGroup<DatacentersGetByNameReturnDatacentersFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatacentersGetByNameReturnDatacentersLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface DatacentersGetByNameReturnDatacentersLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateDatacentersGetByNameReturnDatacentersLocationFormGroup() {
		return new FormGroup<DatacentersGetByNameReturnDatacentersLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatacentersGetByNameReturnDatacentersServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface DatacentersGetByNameReturnDatacentersServer_typesFormProperties {
	}
	export function CreateDatacentersGetByNameReturnDatacentersServer_typesFormGroup() {
		return new FormGroup<DatacentersGetByNameReturnDatacentersServer_typesFormProperties>({
		});

	}

	export interface Datacenters_idGetReturn {

		/** Required */
		datacenter: Datacenters_idGetReturnDatacenter;
	}
	export interface Datacenters_idGetReturnFormProperties {
	}
	export function CreateDatacenters_idGetReturnFormGroup() {
		return new FormGroup<Datacenters_idGetReturnFormProperties>({
		});

	}

	export interface Datacenters_idGetReturnDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: Datacenters_idGetReturnDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: Datacenters_idGetReturnDatacenterServer_types;
	}
	export interface Datacenters_idGetReturnDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatacenters_idGetReturnDatacenterFormGroup() {
		return new FormGroup<Datacenters_idGetReturnDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Datacenters_idGetReturnDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Datacenters_idGetReturnDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateDatacenters_idGetReturnDatacenterLocationFormGroup() {
		return new FormGroup<Datacenters_idGetReturnDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Datacenters_idGetReturnDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface Datacenters_idGetReturnDatacenterServer_typesFormProperties {
	}
	export function CreateDatacenters_idGetReturnDatacenterServer_typesFormGroup() {
		return new FormGroup<Datacenters_idGetReturnDatacenterServer_typesFormProperties>({
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturn {

		/** Required */
		FirewallsGetBySortAndNameAndLabel_selectorReturnFirewalls: Array<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewalls>;
		meta?: FirewallsGetBySortAndNameAndLabel_selectorReturnMeta;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFormProperties {
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFormProperties>({
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewalls {

		/** Required */
		FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_to: Array<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_to>;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** User-defined labels (key-value pairs) */
		labels?: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/** Required */
		FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRules: Array<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRules>;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_to {
		FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resources?: Array<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resources>;
		label_selector?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toLabel_selector;
		server?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toServer;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toFormProperties {

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resources {
		server?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesServer;

		/** Type of resource referenced */
		type?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesFormProperties {

		/** Type of resource referenced */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined),
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesServer {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesServerFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesServerFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType { server = 'server' }

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toLabel_selectorFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toServer {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toServerFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toServerFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType { server = 'server', label_selector = 'label_selector' }

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRules {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description?: string | null;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		destination_ips?: Array<string>;

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection;

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port?: string | null;

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		source_ips?: Array<string>;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesFormProperties {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>,

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port: FormControl<string | null | undefined>,

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			direction: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection { in = 'in', out = 'out' }

	export enum FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol { tcp = 'tcp', udp = 'udp', icmp = 'icmp', esp = 'esp', gre = 'gre' }

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnMeta {

		/** Required */
		pagination: FirewallsGetBySortAndNameAndLabel_selectorReturnMetaPagination;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnMetaFormProperties {
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnMetaFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnMetaFormProperties>({
		});

	}

	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface FirewallsGetBySortAndNameAndLabel_selectorReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateFirewallsGetBySortAndNameAndLabel_selectorReturnMetaPaginationFormGroup() {
		return new FormGroup<FirewallsGetBySortAndNameAndLabel_selectorReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsPostPostBody {

		/** Resources the Firewall should be applied to after creation */
		FirewallsPostPostBodyApply_to?: Array<FirewallsPostPostBodyApply_to>;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/**
		 * Name of the Firewall
		 * Required
		 */
		name: string;

		/** Array of rules */
		FirewallsPostPostBodyRules?: Array<FirewallsPostPostBodyRules>;
	}
	export interface FirewallsPostPostBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the Firewall
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFirewallsPostPostBodyFormGroup() {
		return new FormGroup<FirewallsPostPostBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsPostPostBodyApply_to {

		/** Configuration for type LabelSelector, required if type is `label_selector` */
		label_selector?: FirewallsPostPostBodyApply_toLabel_selector;

		/** Configuration for type Server, required if type is `server` */
		server?: FirewallsPostPostBodyApply_toServer;

		/**
		 * Type of the resource
		 * Required
		 */
		type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType;
	}
	export interface FirewallsPostPostBodyApply_toFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>,
	}
	export function CreateFirewallsPostPostBodyApply_toFormGroup() {
		return new FormGroup<FirewallsPostPostBodyApply_toFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsPostPostBodyApply_toLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface FirewallsPostPostBodyApply_toLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFirewallsPostPostBodyApply_toLabel_selectorFormGroup() {
		return new FormGroup<FirewallsPostPostBodyApply_toLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsPostPostBodyApply_toServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface FirewallsPostPostBodyApply_toServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewallsPostPostBodyApply_toServerFormGroup() {
		return new FormGroup<FirewallsPostPostBodyApply_toServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FirewallsPostPostBodyRules {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description?: string | null;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		destination_ips?: Array<string>;

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection;

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port?: string | null;

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		source_ips?: Array<string>;
	}
	export interface FirewallsPostPostBodyRulesFormProperties {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>,

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port: FormControl<string | null | undefined>,

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>,
	}
	export function CreateFirewallsPostPostBodyRulesFormGroup() {
		return new FormGroup<FirewallsPostPostBodyRulesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			direction: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idGetReturn {

		/** Required */
		firewall: Firewalls_idGetReturnFirewall;
	}
	export interface Firewalls_idGetReturnFormProperties {
	}
	export function CreateFirewalls_idGetReturnFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFormProperties>({
		});

	}

	export interface Firewalls_idGetReturnFirewall {

		/** Required */
		Firewalls_idGetReturnFirewallApplied_to: Array<Firewalls_idGetReturnFirewallApplied_to>;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** User-defined labels (key-value pairs) */
		labels?: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/** Required */
		Firewalls_idGetReturnFirewallRules: Array<Firewalls_idGetReturnFirewallRules>;
	}
	export interface Firewalls_idGetReturnFirewallFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idGetReturnFirewallApplied_to {
		Firewalls_idGetReturnFirewallApplied_toApplied_to_resources?: Array<Firewalls_idGetReturnFirewallApplied_toApplied_to_resources>;
		label_selector?: Firewalls_idGetReturnFirewallApplied_toLabel_selector;
		server?: Firewalls_idGetReturnFirewallApplied_toServer;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType;
	}
	export interface Firewalls_idGetReturnFirewallApplied_toFormProperties {

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallApplied_toFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallApplied_toFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idGetReturnFirewallApplied_toApplied_to_resources {
		server?: Firewalls_idGetReturnFirewallApplied_toApplied_to_resourcesServer;

		/** Type of resource referenced */
		type?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null;
	}
	export interface Firewalls_idGetReturnFirewallApplied_toApplied_to_resourcesFormProperties {

		/** Type of resource referenced */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallApplied_toApplied_to_resourcesFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallApplied_toApplied_to_resourcesFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined),
		});

	}

	export interface Firewalls_idGetReturnFirewallApplied_toApplied_to_resourcesServer {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;
	}
	export interface Firewalls_idGetReturnFirewallApplied_toApplied_to_resourcesServerFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallApplied_toApplied_to_resourcesServerFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallApplied_toApplied_to_resourcesServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idGetReturnFirewallApplied_toLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Firewalls_idGetReturnFirewallApplied_toLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallApplied_toLabel_selectorFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallApplied_toLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idGetReturnFirewallApplied_toServer {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;
	}
	export interface Firewalls_idGetReturnFirewallApplied_toServerFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallApplied_toServerFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallApplied_toServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idGetReturnFirewallRules {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description?: string | null;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		destination_ips?: Array<string>;

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection;

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port?: string | null;

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		source_ips?: Array<string>;
	}
	export interface Firewalls_idGetReturnFirewallRulesFormProperties {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>,

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port: FormControl<string | null | undefined>,

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>,
	}
	export function CreateFirewalls_idGetReturnFirewallRulesFormGroup() {
		return new FormGroup<Firewalls_idGetReturnFirewallRulesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			direction: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New Firewall name */
		name?: string | null;
	}
	export interface Firewalls_idPutPutBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New Firewall name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idPutPutBodyFormGroup() {
		return new FormGroup<Firewalls_idPutPutBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Firewalls_idPutReturn {

		/** Required */
		firewall: Firewalls_idPutReturnFirewall;
	}
	export interface Firewalls_idPutReturnFormProperties {
	}
	export function CreateFirewalls_idPutReturnFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFormProperties>({
		});

	}

	export interface Firewalls_idPutReturnFirewall {

		/** Required */
		Firewalls_idPutReturnFirewallApplied_to: Array<Firewalls_idPutReturnFirewallApplied_to>;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** User-defined labels (key-value pairs) */
		labels?: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/** Required */
		Firewalls_idPutReturnFirewallRules: Array<Firewalls_idPutReturnFirewallRules>;
	}
	export interface Firewalls_idPutReturnFirewallFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idPutReturnFirewallApplied_to {
		Firewalls_idPutReturnFirewallApplied_toApplied_to_resources?: Array<Firewalls_idPutReturnFirewallApplied_toApplied_to_resources>;
		label_selector?: Firewalls_idPutReturnFirewallApplied_toLabel_selector;
		server?: Firewalls_idPutReturnFirewallApplied_toServer;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType;
	}
	export interface Firewalls_idPutReturnFirewallApplied_toFormProperties {

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallApplied_toFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallApplied_toFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idPutReturnFirewallApplied_toApplied_to_resources {
		server?: Firewalls_idPutReturnFirewallApplied_toApplied_to_resourcesServer;

		/** Type of resource referenced */
		type?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null;
	}
	export interface Firewalls_idPutReturnFirewallApplied_toApplied_to_resourcesFormProperties {

		/** Type of resource referenced */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallApplied_toApplied_to_resourcesFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallApplied_toApplied_to_resourcesFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined),
		});

	}

	export interface Firewalls_idPutReturnFirewallApplied_toApplied_to_resourcesServer {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;
	}
	export interface Firewalls_idPutReturnFirewallApplied_toApplied_to_resourcesServerFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallApplied_toApplied_to_resourcesServerFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallApplied_toApplied_to_resourcesServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idPutReturnFirewallApplied_toLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Firewalls_idPutReturnFirewallApplied_toLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallApplied_toLabel_selectorFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallApplied_toLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idPutReturnFirewallApplied_toServer {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;
	}
	export interface Firewalls_idPutReturnFirewallApplied_toServerFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallApplied_toServerFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallApplied_toServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idPutReturnFirewallRules {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description?: string | null;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		destination_ips?: Array<string>;

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection;

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port?: string | null;

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		source_ips?: Array<string>;
	}
	export interface Firewalls_idPutReturnFirewallRulesFormProperties {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>,

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port: FormControl<string | null | undefined>,

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>,
	}
	export function CreateFirewalls_idPutReturnFirewallRulesFormGroup() {
		return new FormGroup<Firewalls_idPutReturnFirewallRulesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			direction: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsGetBySortAndStatusReturn {

		/** Required */
		Firewalls_idActionsGetBySortAndStatusReturnActions: Array<Firewalls_idActionsGetBySortAndStatusReturnActions>;
		meta?: Firewalls_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Firewalls_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateFirewalls_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Firewalls_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Firewalls_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Firewalls_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Firewalls_idActionsGetBySortAndStatusReturnActionsResources: Array<Firewalls_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Firewalls_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateFirewalls_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Firewalls_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Firewalls_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Firewalls_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Firewalls_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Firewalls_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Firewalls_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Firewalls_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateFirewalls_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Firewalls_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Firewalls_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Firewalls_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Firewalls_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsApply_to_resourcesPostPostBody {

		/**
		 * Resources the Firewall should be applied to
		 * Required
		 */
		Firewalls_idActionsApply_to_resourcesPostPostBodyApply_to: Array<Firewalls_idActionsApply_to_resourcesPostPostBodyApply_to>;
	}
	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyFormProperties {
	}
	export function CreateFirewalls_idActionsApply_to_resourcesPostPostBodyFormGroup() {
		return new FormGroup<Firewalls_idActionsApply_to_resourcesPostPostBodyFormProperties>({
		});

	}

	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyApply_to {

		/** Configuration for type label_selector, required if type is `label_selector` */
		label_selector?: Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toLabel_selector;

		/** Configuration for type server, required if type is `server` */
		server?: Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toServer;

		/** Type of the resource */
		type?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null;
	}
	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toFormProperties {

		/** Type of the resource */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>,
	}
	export function CreateFirewalls_idActionsApply_to_resourcesPostPostBodyApply_toFormGroup() {
		return new FormGroup<Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>(undefined),
		});

	}

	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idActionsApply_to_resourcesPostPostBodyApply_toLabel_selectorFormGroup() {
		return new FormGroup<Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idActionsApply_to_resourcesPostPostBodyApply_toServerFormGroup() {
		return new FormGroup<Firewalls_idActionsApply_to_resourcesPostPostBodyApply_toServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsRemove_from_resourcesPostPostBody {

		/**
		 * Resources the Firewall should be removed from
		 * Required
		 */
		Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_from: Array<Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_from>;
	}
	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyFormProperties {
	}
	export function CreateFirewalls_idActionsRemove_from_resourcesPostPostBodyFormGroup() {
		return new FormGroup<Firewalls_idActionsRemove_from_resourcesPostPostBodyFormProperties>({
		});

	}

	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_from {

		/** Configuration for type label_selector, required if type is `label_selector` */
		label_selector?: Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromLabel_selector;

		/** Configuration for type server, required if type is `server` */
		server?: Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromServer;

		/** Type of the resource */
		type?: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null;
	}
	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromFormProperties {

		/** Type of the resource */
		type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>,
	}
	export function CreateFirewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromFormGroup() {
		return new FormGroup<Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromFormProperties>({
			type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toType | null | undefined>(undefined),
		});

	}

	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromLabel_selectorFormGroup() {
		return new FormGroup<Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateFirewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromServerFormGroup() {
		return new FormGroup<Firewalls_idActionsRemove_from_resourcesPostPostBodyRemove_fromServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActionsSet_rulesPostPostBody {

		/**
		 * Array of rules
		 * Required
		 * Maximum items: 50
		 */
		Firewalls_idActionsSet_rulesPostPostBodyRules: Array<Firewalls_idActionsSet_rulesPostPostBodyRules>;
	}
	export interface Firewalls_idActionsSet_rulesPostPostBodyFormProperties {
	}
	export function CreateFirewalls_idActionsSet_rulesPostPostBodyFormGroup() {
		return new FormGroup<Firewalls_idActionsSet_rulesPostPostBodyFormProperties>({
		});

	}

	export interface Firewalls_idActionsSet_rulesPostPostBodyRules {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description?: string | null;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		destination_ips?: Array<string>;

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection;

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port?: string | null;

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol;

		/** List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most. */
		source_ips?: Array<string>;
	}
	export interface Firewalls_idActionsSet_rulesPostPostBodyRulesFormProperties {

		/**
		 * Description of the Rule
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
		 * Required
		 */
		direction: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>,

		/** Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`. */
		port: FormControl<string | null | undefined>,

		/**
		 * Type of traffic to allow
		 * Required
		 */
		protocol: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>,
	}
	export function CreateFirewalls_idActionsSet_rulesPostPostBodyRulesFormGroup() {
		return new FormGroup<Firewalls_idActionsSet_rulesPostPostBodyRulesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			direction: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesDirection | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsRulesProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActions_action_idGetReturn {

		/** Required */
		action: Firewalls_idActions_action_idGetReturnAction;
	}
	export interface Firewalls_idActions_action_idGetReturnFormProperties {
	}
	export function CreateFirewalls_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Firewalls_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Firewalls_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Firewalls_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Firewalls_idActions_action_idGetReturnActionResources: Array<Firewalls_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Firewalls_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateFirewalls_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Firewalls_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Firewalls_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Firewalls_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Firewalls_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Firewalls_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFirewalls_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Firewalls_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Floating_ipsGetByNameAndLabel_selectorAndSortSort { id = 'id', 'id:asc' = 'id:asc', 'id:desc' = 'id:desc', created = 'created', 'created:asc' = 'created:asc', 'created:desc' = 'created:desc' }

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturn {

		/** Required */
		Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ips: Array<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ips>;
		meta?: Floating_ipsGetByNameAndLabel_selectorAndSortReturnMeta;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFormProperties {
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFormProperties>({
		});

	}

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ips {

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: boolean;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Description of the Resource
		 * Required
		 */
		description: string;

		/**
		 * Array of reverse DNS entries
		 * Required
		 */
		Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsDns_ptr: Array<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsDns_ptr>;

		/**
		 * Location the Floating IP was created in. Routing is optimized for this Location.
		 * Required
		 */
		home_location: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsHome_location;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * IP address
		 * Required
		 */
		ip: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsProtection;

		/**
		 * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		server: number;

		/**
		 * Type of the Floating IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsFormProperties {

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Description of the Resource
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		server: FormControl<number | null | undefined>,

		/**
		 * Type of the Floating IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsFormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsDns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: string;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsDns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsDns_ptrFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsDns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsHome_location {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsHome_locationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsHome_locationFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsHome_locationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsProtectionFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType { ipv4 = 'ipv4', ipv6 = 'ipv6' }

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnMeta {

		/** Required */
		pagination: Floating_ipsGetByNameAndLabel_selectorAndSortReturnMetaPagination;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnMetaFormProperties {
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnMetaFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnMetaFormProperties>({
		});

	}

	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Floating_ipsGetByNameAndLabel_selectorAndSortReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateFloating_ipsGetByNameAndLabel_selectorAndSortReturnMetaPaginationFormGroup() {
		return new FormGroup<Floating_ipsGetByNameAndLabel_selectorAndSortReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ipsPostPostBody {
		description?: string | null;

		/** Home Location (routing is optimized for that Location). Only optional if Server argument is passed. */
		home_location?: string | null;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;
		name?: string | null;

		/** Server to assign the Floating IP to */
		server?: number | null;

		/**
		 * Floating IP type
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Floating_ipsPostPostBodyFormProperties {
		description: FormControl<string | null | undefined>,

		/** Home Location (routing is optimized for that Location). Only optional if Server argument is passed. */
		home_location: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Server to assign the Floating IP to */
		server: FormControl<number | null | undefined>,

		/**
		 * Floating IP type
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreateFloating_ipsPostPostBodyFormGroup() {
		return new FormGroup<Floating_ipsPostPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			home_location: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idGetReturn {

		/** Required */
		floating_ip: Floating_ips_idGetReturnFloating_ip;
	}
	export interface Floating_ips_idGetReturnFormProperties {
	}
	export function CreateFloating_ips_idGetReturnFormGroup() {
		return new FormGroup<Floating_ips_idGetReturnFormProperties>({
		});

	}

	export interface Floating_ips_idGetReturnFloating_ip {

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: boolean;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Description of the Resource
		 * Required
		 */
		description: string;

		/**
		 * Array of reverse DNS entries
		 * Required
		 */
		Floating_ips_idGetReturnFloating_ipDns_ptr: Array<Floating_ips_idGetReturnFloating_ipDns_ptr>;

		/**
		 * Location the Floating IP was created in. Routing is optimized for this Location.
		 * Required
		 */
		home_location: Floating_ips_idGetReturnFloating_ipHome_location;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * IP address
		 * Required
		 */
		ip: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Floating_ips_idGetReturnFloating_ipProtection;

		/**
		 * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		server: number;

		/**
		 * Type of the Floating IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Floating_ips_idGetReturnFloating_ipFormProperties {

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Description of the Resource
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		server: FormControl<number | null | undefined>,

		/**
		 * Type of the Floating IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreateFloating_ips_idGetReturnFloating_ipFormGroup() {
		return new FormGroup<Floating_ips_idGetReturnFloating_ipFormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idGetReturnFloating_ipDns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: string;
	}
	export interface Floating_ips_idGetReturnFloating_ipDns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idGetReturnFloating_ipDns_ptrFormGroup() {
		return new FormGroup<Floating_ips_idGetReturnFloating_ipDns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idGetReturnFloating_ipHome_location {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Floating_ips_idGetReturnFloating_ipHome_locationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idGetReturnFloating_ipHome_locationFormGroup() {
		return new FormGroup<Floating_ips_idGetReturnFloating_ipHome_locationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idGetReturnFloating_ipProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Floating_ips_idGetReturnFloating_ipProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateFloating_ips_idGetReturnFloating_ipProtectionFormGroup() {
		return new FormGroup<Floating_ips_idGetReturnFloating_ipProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idPutPutBody {

		/** New Description to set */
		description?: string | null;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New unique name to set */
		name?: string | null;
	}
	export interface Floating_ips_idPutPutBodyFormProperties {

		/** New Description to set */
		description: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New unique name to set */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idPutPutBodyFormGroup() {
		return new FormGroup<Floating_ips_idPutPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Floating_ips_idPutReturn {

		/** Required */
		floating_ip: Floating_ips_idPutReturnFloating_ip;
	}
	export interface Floating_ips_idPutReturnFormProperties {
	}
	export function CreateFloating_ips_idPutReturnFormGroup() {
		return new FormGroup<Floating_ips_idPutReturnFormProperties>({
		});

	}

	export interface Floating_ips_idPutReturnFloating_ip {

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: boolean;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Description of the Resource
		 * Required
		 */
		description: string;

		/**
		 * Array of reverse DNS entries
		 * Required
		 */
		Floating_ips_idPutReturnFloating_ipDns_ptr: Array<Floating_ips_idPutReturnFloating_ipDns_ptr>;

		/**
		 * Location the Floating IP was created in. Routing is optimized for this Location.
		 * Required
		 */
		home_location: Floating_ips_idPutReturnFloating_ipHome_location;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * IP address
		 * Required
		 */
		ip: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Floating_ips_idPutReturnFloating_ipProtection;

		/**
		 * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		server: number;

		/**
		 * Type of the Floating IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Floating_ips_idPutReturnFloating_ipFormProperties {

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Description of the Resource
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * ID of the Server the Floating IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		server: FormControl<number | null | undefined>,

		/**
		 * Type of the Floating IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreateFloating_ips_idPutReturnFloating_ipFormGroup() {
		return new FormGroup<Floating_ips_idPutReturnFloating_ipFormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idPutReturnFloating_ipDns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: string;
	}
	export interface Floating_ips_idPutReturnFloating_ipDns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idPutReturnFloating_ipDns_ptrFormGroup() {
		return new FormGroup<Floating_ips_idPutReturnFloating_ipDns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idPutReturnFloating_ipHome_location {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Floating_ips_idPutReturnFloating_ipHome_locationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idPutReturnFloating_ipHome_locationFormGroup() {
		return new FormGroup<Floating_ips_idPutReturnFloating_ipHome_locationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idPutReturnFloating_ipProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Floating_ips_idPutReturnFloating_ipProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateFloating_ips_idPutReturnFloating_ipProtectionFormGroup() {
		return new FormGroup<Floating_ips_idPutReturnFloating_ipProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActionsGetBySortAndStatusReturn {

		/** Required */
		Floating_ips_idActionsGetBySortAndStatusReturnActions: Array<Floating_ips_idActionsGetBySortAndStatusReturnActions>;
	}
	export interface Floating_ips_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateFloating_ips_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Floating_ips_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Floating_ips_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Floating_ips_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Floating_ips_idActionsGetBySortAndStatusReturnActionsResources: Array<Floating_ips_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Floating_ips_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateFloating_ips_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Floating_ips_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Floating_ips_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Floating_ips_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Floating_ips_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Floating_ips_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActionsAssignPostPostBody {

		/**
		 * ID of the Server the Floating IP shall be assigned to
		 * Required
		 */
		server: number;
	}
	export interface Floating_ips_idActionsAssignPostPostBodyFormProperties {

		/**
		 * ID of the Server the Floating IP shall be assigned to
		 * Required
		 */
		server: FormControl<number | null | undefined>,
	}
	export function CreateFloating_ips_idActionsAssignPostPostBodyFormGroup() {
		return new FormGroup<Floating_ips_idActionsAssignPostPostBodyFormProperties>({
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActionsChange_dns_ptrPostPostBody {

		/**
		 * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
		 * Required
		 */
		dns_ptr: string;

		/**
		 * IP address for which to set the reverse DNS entry
		 * Required
		 */
		ip: string;
	}
	export interface Floating_ips_idActionsChange_dns_ptrPostPostBodyFormProperties {

		/**
		 * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * IP address for which to set the reverse DNS entry
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idActionsChange_dns_ptrPostPostBodyFormGroup() {
		return new FormGroup<Floating_ips_idActionsChange_dns_ptrPostPostBodyFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActionsChange_protectionPostPostBody {

		/** If true, prevents the Floating IP from being deleted */
		delete?: boolean | null;
	}
	export interface Floating_ips_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the Floating IP from being deleted */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateFloating_ips_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Floating_ips_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Floating_ips_idActions_action_idGetReturn {

		/** Required */
		action: Floating_ips_idActions_action_idGetReturnAction;
	}
	export interface Floating_ips_idActions_action_idGetReturnFormProperties {
	}
	export function CreateFloating_ips_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Floating_ips_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Floating_ips_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Floating_ips_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Floating_ips_idActions_action_idGetReturnActionResources: Array<Floating_ips_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Floating_ips_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateFloating_ips_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Floating_ips_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Floating_ips_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Floating_ips_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Floating_ips_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Floating_ips_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFloating_ips_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Floating_ips_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureType { system = 'system', snapshot = 'snapshot', backup = 'backup', app = 'app' }

	export enum ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureStatus { available = 'available', creating = 'creating' }

	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturn {

		/** Required */
		ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImages: Array<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImages>;
		meta?: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMeta;
	}
	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnFormProperties {
	}
	export function CreateImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnFormGroup() {
		return new FormGroup<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnFormProperties>({
		});

	}

	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImages {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: number;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Information about the Server the Image was created from
		 * Required
		 */
		created_from: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesCreated_from;

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: string;

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Image
		 * Required
		 */
		description: string;

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: number;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: string;

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor;

		/**
		 * Operating system version
		 * Required
		 */
		os_version: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesProtection;

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy?: boolean | null;

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus;

		/**
		 * Type of the Image
		 * Required
		 */
		type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType;
	}
	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesFormProperties {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Image
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: FormControl<number | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>,

		/**
		 * Operating system version
		 * Required
		 */
		os_version: FormControl<string | null | undefined>,

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>,

		/**
		 * Type of the Image
		 * Required
		 */
		type: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>,
	}
	export function CreateImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesFormGroup() {
		return new FormGroup<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesFormProperties>({
			bound_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os_flavor: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>(undefined, [Validators.required]),
			os_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rapid_deploy: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesCreated_from {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: number;

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: string;
	}
	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesCreated_fromFormProperties {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesCreated_fromFormGroup() {
		return new FormGroup<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesCreated_fromFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor { ubuntu = 'ubuntu', centos = 'centos', debian = 'debian', fedora = 'fedora', unknown = 'unknown' }

	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesProtectionFormGroup() {
		return new FormGroup<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus { available = 'available', creating = 'creating', unavailable = 'unavailable' }

	export enum ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType { system = 'system', app = 'app', snapshot = 'snapshot', backup = 'backup', temporary = 'temporary' }

	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMeta {

		/** Required */
		pagination: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaPagination;
	}
	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaFormProperties {
	}
	export function CreateImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaFormGroup() {
		return new FormGroup<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaFormProperties>({
		});

	}

	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaPaginationFormGroup() {
		return new FormGroup<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idGetReturn {
		image?: Images_idGetReturnImage;
	}
	export interface Images_idGetReturnFormProperties {
	}
	export function CreateImages_idGetReturnFormGroup() {
		return new FormGroup<Images_idGetReturnFormProperties>({
		});

	}

	export interface Images_idGetReturnImage {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: number;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Information about the Server the Image was created from
		 * Required
		 */
		created_from: Images_idGetReturnImageCreated_from;

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: string;

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Image
		 * Required
		 */
		description: string;

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: number;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: string;

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor;

		/**
		 * Operating system version
		 * Required
		 */
		os_version: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Images_idGetReturnImageProtection;

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy?: boolean | null;

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus;

		/**
		 * Type of the Image
		 * Required
		 */
		type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType;
	}
	export interface Images_idGetReturnImageFormProperties {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Image
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: FormControl<number | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>,

		/**
		 * Operating system version
		 * Required
		 */
		os_version: FormControl<string | null | undefined>,

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>,

		/**
		 * Type of the Image
		 * Required
		 */
		type: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>,
	}
	export function CreateImages_idGetReturnImageFormGroup() {
		return new FormGroup<Images_idGetReturnImageFormProperties>({
			bound_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os_flavor: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>(undefined, [Validators.required]),
			os_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rapid_deploy: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idGetReturnImageCreated_from {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: number;

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: string;
	}
	export interface Images_idGetReturnImageCreated_fromFormProperties {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImages_idGetReturnImageCreated_fromFormGroup() {
		return new FormGroup<Images_idGetReturnImageCreated_fromFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idGetReturnImageProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Images_idGetReturnImageProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateImages_idGetReturnImageProtectionFormGroup() {
		return new FormGroup<Images_idGetReturnImageProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idPutPutBody {

		/** New description of Image */
		description?: string | null;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** Destination Image type to convert to */
		type?: Images_idPutPutBodyType | null;
	}
	export interface Images_idPutPutBodyFormProperties {

		/** New description of Image */
		description: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** Destination Image type to convert to */
		type: FormControl<Images_idPutPutBodyType | null | undefined>,
	}
	export function CreateImages_idPutPutBodyFormGroup() {
		return new FormGroup<Images_idPutPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Images_idPutPutBodyType | null | undefined>(undefined),
		});

	}

	export enum Images_idPutPutBodyType { snapshot = 'snapshot' }

	export interface Images_idPutReturn {
		image?: Images_idPutReturnImage;
	}
	export interface Images_idPutReturnFormProperties {
	}
	export function CreateImages_idPutReturnFormGroup() {
		return new FormGroup<Images_idPutReturnFormProperties>({
		});

	}

	export interface Images_idPutReturnImage {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: number;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Information about the Server the Image was created from
		 * Required
		 */
		created_from: Images_idPutReturnImageCreated_from;

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: string;

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Image
		 * Required
		 */
		description: string;

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: number;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: string;

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor;

		/**
		 * Operating system version
		 * Required
		 */
		os_version: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Images_idPutReturnImageProtection;

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy?: boolean | null;

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus;

		/**
		 * Type of the Image
		 * Required
		 */
		type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType;
	}
	export interface Images_idPutReturnImageFormProperties {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Image
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: FormControl<number | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>,

		/**
		 * Operating system version
		 * Required
		 */
		os_version: FormControl<string | null | undefined>,

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>,

		/**
		 * Type of the Image
		 * Required
		 */
		type: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>,
	}
	export function CreateImages_idPutReturnImageFormGroup() {
		return new FormGroup<Images_idPutReturnImageFormProperties>({
			bound_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os_flavor: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>(undefined, [Validators.required]),
			os_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rapid_deploy: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idPutReturnImageCreated_from {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: number;

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: string;
	}
	export interface Images_idPutReturnImageCreated_fromFormProperties {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImages_idPutReturnImageCreated_fromFormGroup() {
		return new FormGroup<Images_idPutReturnImageCreated_fromFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idPutReturnImageProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Images_idPutReturnImageProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateImages_idPutReturnImageProtectionFormGroup() {
		return new FormGroup<Images_idPutReturnImageProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActionsGetBySortAndStatusReturn {

		/** Required */
		Images_idActionsGetBySortAndStatusReturnActions: Array<Images_idActionsGetBySortAndStatusReturnActions>;
		meta?: Images_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Images_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateImages_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Images_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Images_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Images_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Images_idActionsGetBySortAndStatusReturnActionsResources: Array<Images_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Images_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateImages_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Images_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Images_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateImages_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Images_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Images_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImages_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Images_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Images_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Images_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateImages_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Images_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Images_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Images_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateImages_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Images_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActionsChange_protectionPostPostBody {

		/** If true, prevents the snapshot from being deleted */
		delete?: boolean | null;
	}
	export interface Images_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the snapshot from being deleted */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateImages_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Images_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Images_idActions_action_idGetReturn {

		/** Required */
		action: Images_idActions_action_idGetReturnAction;
	}
	export interface Images_idActions_action_idGetReturnFormProperties {
	}
	export function CreateImages_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Images_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Images_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Images_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Images_idActions_action_idGetReturnActionResources: Array<Images_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Images_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateImages_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Images_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Images_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateImages_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Images_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Images_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImages_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Images_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturn {

		/** Required */
		IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsos: Array<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsos>;
		meta?: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMeta;
	}
	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnFormProperties {
	}
	export function CreateIsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnFormGroup() {
		return new FormGroup<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnFormProperties>({
		});

	}

	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsos {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the ISO
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: string;

		/**
		 * Type of the ISO
		 * Required
		 */
		type: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType;
	}
	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosFormProperties {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the ISO
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the ISO
		 * Required
		 */
		type: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>,
	}
	export function CreateIsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosFormGroup() {
		return new FormGroup<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture { x86 = 'x86', arm = 'arm' }

	export enum IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType { public = 'public', private = 'private' }

	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMeta {

		/** Required */
		pagination: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaPagination;
	}
	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaFormProperties {
	}
	export function CreateIsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaFormGroup() {
		return new FormGroup<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaFormProperties>({
		});

	}

	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateIsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaPaginationFormGroup() {
		return new FormGroup<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Isos_idGetReturn {

		/** Required */
		iso: Isos_idGetReturnIso;
	}
	export interface Isos_idGetReturnFormProperties {
	}
	export function CreateIsos_idGetReturnFormGroup() {
		return new FormGroup<Isos_idGetReturnFormProperties>({
		});

	}

	export interface Isos_idGetReturnIso {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the ISO
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: string;

		/**
		 * Type of the ISO
		 * Required
		 */
		type: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType;
	}
	export interface Isos_idGetReturnIsoFormProperties {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the ISO
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the ISO
		 * Required
		 */
		type: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>,
	}
	export function CreateIsos_idGetReturnIsoFormGroup() {
		return new FormGroup<Isos_idGetReturnIsoFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_typesGetByNameReturn {

		/** Required */
		Load_balancer_typesGetByNameReturnLoad_balancer_types: Array<Load_balancer_typesGetByNameReturnLoad_balancer_types>;
	}
	export interface Load_balancer_typesGetByNameReturnFormProperties {
	}
	export function CreateLoad_balancer_typesGetByNameReturnFormGroup() {
		return new FormGroup<Load_balancer_typesGetByNameReturnFormProperties>({
		});

	}

	export interface Load_balancer_typesGetByNameReturnLoad_balancer_types {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: string;

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: number;

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: number;

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: number;

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: number;

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: number;

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different network zones
		 * Required
		 */
		Load_balancer_typesGetByNameReturnLoad_balancer_typesPrices: Array<Load_balancer_typesGetByNameReturnLoad_balancer_typesPrices>;
	}
	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesFormProperties {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: FormControl<number | null | undefined>,

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: FormControl<number | null | undefined>,

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: FormControl<number | null | undefined>,

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_typesGetByNameReturnLoad_balancer_typesFormGroup() {
		return new FormGroup<Load_balancer_typesGetByNameReturnLoad_balancer_typesFormProperties>({
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_assigned_certificates: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_connections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_services: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_targets: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesPrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Resource in this Location
		 * Required
		 */
		price_hourly: Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_hourly;

		/**
		 * Monthly costs for a Resource in this Location
		 * Required
		 */
		price_monthly: Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_monthly;
	}
	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_typesGetByNameReturnLoad_balancer_typesPricesFormGroup() {
		return new FormGroup<Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_hourlyFormGroup() {
		return new FormGroup<Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_monthlyFormGroup() {
		return new FormGroup<Load_balancer_typesGetByNameReturnLoad_balancer_typesPricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_types_idGetReturn {
		load_balancer_type?: Load_balancer_types_idGetReturnLoad_balancer_type;
	}
	export interface Load_balancer_types_idGetReturnFormProperties {
	}
	export function CreateLoad_balancer_types_idGetReturnFormGroup() {
		return new FormGroup<Load_balancer_types_idGetReturnFormProperties>({
		});

	}

	export interface Load_balancer_types_idGetReturnLoad_balancer_type {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: string;

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: number;

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: number;

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: number;

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: number;

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: number;

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different network zones
		 * Required
		 */
		Load_balancer_types_idGetReturnLoad_balancer_typePrices: Array<Load_balancer_types_idGetReturnLoad_balancer_typePrices>;
	}
	export interface Load_balancer_types_idGetReturnLoad_balancer_typeFormProperties {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: FormControl<number | null | undefined>,

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: FormControl<number | null | undefined>,

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: FormControl<number | null | undefined>,

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_types_idGetReturnLoad_balancer_typeFormGroup() {
		return new FormGroup<Load_balancer_types_idGetReturnLoad_balancer_typeFormProperties>({
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_assigned_certificates: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_connections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_services: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_targets: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_types_idGetReturnLoad_balancer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Resource in this Location
		 * Required
		 */
		price_hourly: Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Resource in this Location
		 * Required
		 */
		price_monthly: Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_monthly;
	}
	export interface Load_balancer_types_idGetReturnLoad_balancer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_types_idGetReturnLoad_balancer_typePricesFormGroup() {
		return new FormGroup<Load_balancer_types_idGetReturnLoad_balancer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_types_idGetReturnLoad_balancer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancer_types_idGetReturnLoad_balancer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Load_balancer_types_idGetReturnLoad_balancer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturn {

		/** Required */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancers: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancers>;
		meta?: Load_balancersGetBySortAndNameAndLabel_selectorReturnMeta;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnFormProperties {
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnFormProperties>({
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancers {

		/**
		 * Algorithm of the Load Balancer
		 * Required
		 */
		algorithm: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithm;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: number;

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/** Required */
		load_balancer_type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_type;

		/** Required */
		location: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLocation;

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: number;

		/**
		 * Private networks information
		 * Required
		 */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPrivate_net: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPrivate_net>;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersProtection;

		/**
		 * Public network information
		 * Required
		 */
		public_net: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_net;

		/**
		 * List of services that belong to this Load Balancer
		 * Required
		 */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServices: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServices>;

		/**
		 * List of targets that belong to this Load Balancer
		 * Required
		 */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargets: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargets>;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: FormControl<number | null | undefined>,

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			included_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ingoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outgoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithm {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmFormProperties {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType { round_robin = 'round_robin', least_connections = 'least_connections' }

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_type {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: string;

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: number;

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: number;

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: number;

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: number;

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: number;

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different network zones
		 * Required
		 */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePrices: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePrices>;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typeFormProperties {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: FormControl<number | null | undefined>,

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: FormControl<number | null | undefined>,

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: FormControl<number | null | undefined>,

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typeFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typeFormProperties>({
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_assigned_certificates: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_connections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_services: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_targets: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Resource in this Location
		 * Required
		 */
		price_hourly: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Resource in this Location
		 * Required
		 */
		price_monthly: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_monthly;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLoad_balancer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLocationFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPrivate_net {
		ip?: string | null;
		network?: number | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPrivate_netFormProperties {
		ip: FormControl<string | null | undefined>,
		network: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPrivate_netFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPrivate_netFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersProtectionFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_net {

		/**
		 * Public Interface enabled or not
		 * Required
		 */
		enabled: boolean;

		/**
		 * IP address (v4)
		 * Required
		 */
		ipv4: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv4;

		/**
		 * IP address (v6)
		 * Required
		 */
		ipv6: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv6;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netFormProperties {

		/**
		 * Public Interface enabled or not
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv4 {

		/** Reverse DNS PTR entry for the IPv4 address of this Load Balancer */
		dns_ptr?: string | null;

		/** IP address (v4) of this Load Balancer */
		ip?: string | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv4FormProperties {

		/** Reverse DNS PTR entry for the IPv4 address of this Load Balancer */
		dns_ptr: FormControl<string | null | undefined>,

		/** IP address (v4) of this Load Balancer */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv4FormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv4FormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv6 {

		/** Reverse DNS PTR entry for the IPv6 address of this Load Balancer */
		dns_ptr?: string | null;

		/** IP address (v6) of this Load Balancer */
		ip?: string | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv6FormProperties {

		/** Reverse DNS PTR entry for the IPv6 address of this Load Balancer */
		dns_ptr: FormControl<string | null | undefined>,

		/** IP address (v6) of this Load Balancer */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv6FormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersPublic_netIpv6FormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServices {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: number;

		/**
		 * Service health check
		 * Required
		 */
		health_check: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_check;

		/** Configuration option for protocols http and https */
		http?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHttp;

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: number;

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol;

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: boolean;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesFormProperties {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: FormControl<number | null | undefined>,

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>,

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesFormProperties>({
			destination_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>(undefined, [Validators.required]),
			proxyprotocol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_check {

		/** Additional configuration for protocol http */
		http?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkHttp;

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: number;

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: number;

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol;

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: number;

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: number;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkFormProperties {

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: FormControl<number | null | undefined>,

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>,

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkHttp {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: string;

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: string;

		/** String that must be contained in HTTP response in order to pass the health check */
		response?: string | null;

		/** List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??. */
		status_codes?: Array<string>;

		/** Use HTTPS for health check */
		tls?: boolean | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkHttpFormProperties {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** String that must be contained in HTTP response in order to pass the health check */
		response: FormControl<string | null | undefined>,

		/** Use HTTPS for health check */
		tls: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkHttpFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkHttpFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined),
			tls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol { tcp = 'tcp', http = 'http' }

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHttp {

		/** IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http" */
		certificates?: Array<number>;

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime?: number | null;

		/** Name of the cookie used for sticky sessions */
		cookie_name?: string | null;

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http?: boolean | null;

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions?: boolean | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHttpFormProperties {

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime: FormControl<number | null | undefined>,

		/** Name of the cookie used for sticky sessions */
		cookie_name: FormControl<string | null | undefined>,

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http: FormControl<boolean | null | undefined>,

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHttpFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHttpFormProperties>({
			cookie_lifetime: new FormControl<number | null | undefined>(undefined),
			cookie_name: new FormControl<string | null | undefined>(undefined),
			redirect_http: new FormControl<boolean | null | undefined>(undefined),
			sticky_sessions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol { tcp = 'tcp', http = 'http', https = 'https' }

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_status?: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_status>;

		/** IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip". */
		ip?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsIp;

		/** Label selector used to determine targets. Only present for target type "label_selector". */
		label_selector?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsLabel_selector;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsServer;

		/** List of resolved label selector target Servers. Only present for type "label_selector". */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargets?: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargets>;

		/**
		 * Type of the resource
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>(undefined, [Validators.required]),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export enum Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus { healthy = 'healthy', unhealthy = 'unhealthy', unknown = 'unknown' }

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsIp {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsIpFormProperties {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsIpFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsIpFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsLabel_selectorFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsServerFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsHealth_status?: Array<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsHealth_status>;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsServer;

		/** Type of the resource. Here always "server". */
		type?: string | null;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsFormProperties {

		/** Type of the resource. Here always "server". */
		type: FormControl<string | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsServerFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType { server = 'server', label_selector = 'label_selector', ip = 'ip' }

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnMeta {

		/** Required */
		pagination: Load_balancersGetBySortAndNameAndLabel_selectorReturnMetaPagination;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnMetaFormProperties {
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnMetaFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnMetaFormProperties>({
		});

	}

	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Load_balancersGetBySortAndNameAndLabel_selectorReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersGetBySortAndNameAndLabel_selectorReturnMetaPaginationFormGroup() {
		return new FormGroup<Load_balancersGetBySortAndNameAndLabel_selectorReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBody {

		/**
		 * Algorithm of the Load Balancer
		 * Required
		 */
		algorithm: Load_balancersPostPostBodyAlgorithm;

		/** User-defined labels (key-value pairs) */
		labels?: Load_balancersPostPostBodyLabels;

		/**
		 * ID or name of the Load Balancer type this Load Balancer should be created with
		 * Required
		 */
		load_balancer_type: string;

		/** ID or name of Location to create Load Balancer in */
		location?: string | null;

		/**
		 * Name of the Load Balancer
		 * Required
		 */
		name: string;

		/** ID of the network the Load Balancer should be attached to on creation */
		network?: number | null;

		/** Name of network zone */
		network_zone?: string | null;

		/** Enable or disable the public interface of the Load Balancer */
		public_interface?: boolean | null;

		/** Array of services */
		Load_balancersPostPostBodyServices?: Array<Load_balancersPostPostBodyServices>;

		/** Array of targets */
		Load_balancersPostPostBodyTargets?: Array<Load_balancersPostPostBodyTargets>;
	}
	export interface Load_balancersPostPostBodyFormProperties {

		/**
		 * ID or name of the Load Balancer type this Load Balancer should be created with
		 * Required
		 */
		load_balancer_type: FormControl<string | null | undefined>,

		/** ID or name of Location to create Load Balancer in */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of the Load Balancer
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** ID of the network the Load Balancer should be attached to on creation */
		network: FormControl<number | null | undefined>,

		/** Name of network zone */
		network_zone: FormControl<string | null | undefined>,

		/** Enable or disable the public interface of the Load Balancer */
		public_interface: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyFormProperties>({
			load_balancer_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network: new FormControl<number | null | undefined>(undefined),
			network_zone: new FormControl<string | null | undefined>(undefined),
			public_interface: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyAlgorithm {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType;
	}
	export interface Load_balancersPostPostBodyAlgorithmFormProperties {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyAlgorithmFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyAlgorithmFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBodyLabels {

		/** New label */
		labelkey?: string | null;
	}
	export interface Load_balancersPostPostBodyLabelsFormProperties {

		/** New label */
		labelkey: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyLabelsFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyLabelsFormProperties>({
			labelkey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyServices {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: number;

		/**
		 * Service health check
		 * Required
		 */
		health_check: Load_balancersPostPostBodyServicesHealth_check;

		/** Configuration option for protocols http and https */
		http?: Load_balancersPostPostBodyServicesHttp;

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: number;

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol;

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: boolean;
	}
	export interface Load_balancersPostPostBodyServicesFormProperties {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: FormControl<number | null | undefined>,

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>,

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyServicesFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyServicesFormProperties>({
			destination_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>(undefined, [Validators.required]),
			proxyprotocol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBodyServicesHealth_check {

		/** Additional configuration for protocol http */
		http?: Load_balancersPostPostBodyServicesHealth_checkHttp;

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: number;

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: number;

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol;

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: number;

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: number;
	}
	export interface Load_balancersPostPostBodyServicesHealth_checkFormProperties {

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: FormControl<number | null | undefined>,

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>,

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyServicesHealth_checkFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyServicesHealth_checkFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBodyServicesHealth_checkHttp {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: string;

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: string;

		/** String that must be contained in HTTP response in order to pass the health check */
		response?: string | null;

		/** List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??. */
		status_codes?: Array<string>;

		/** Use HTTPS for health check */
		tls?: boolean | null;
	}
	export interface Load_balancersPostPostBodyServicesHealth_checkHttpFormProperties {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** String that must be contained in HTTP response in order to pass the health check */
		response: FormControl<string | null | undefined>,

		/** Use HTTPS for health check */
		tls: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyServicesHealth_checkHttpFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyServicesHealth_checkHttpFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined),
			tls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyServicesHttp {

		/** IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http" */
		certificates?: Array<number>;

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime?: number | null;

		/** Name of the cookie used for sticky sessions */
		cookie_name?: string | null;

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http?: boolean | null;

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions?: boolean | null;
	}
	export interface Load_balancersPostPostBodyServicesHttpFormProperties {

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime: FormControl<number | null | undefined>,

		/** Name of the cookie used for sticky sessions */
		cookie_name: FormControl<string | null | undefined>,

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http: FormControl<boolean | null | undefined>,

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyServicesHttpFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyServicesHttpFormProperties>({
			cookie_lifetime: new FormControl<number | null | undefined>(undefined),
			cookie_name: new FormControl<string | null | undefined>(undefined),
			redirect_http: new FormControl<boolean | null | undefined>(undefined),
			sticky_sessions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancersPostPostBodyTargetsHealth_status?: Array<Load_balancersPostPostBodyTargetsHealth_status>;

		/** IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip". */
		ip?: Load_balancersPostPostBodyTargetsIp;

		/** Label selector used to determine targets. Only present for target type "label_selector". */
		label_selector?: Load_balancersPostPostBodyTargetsLabel_selector;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancersPostPostBodyTargetsServer;

		/** List of resolved label selector target Servers. Only present for type "label_selector". */
		Load_balancersPostPostBodyTargetsTargets?: Array<Load_balancersPostPostBodyTargetsTargets>;

		/**
		 * Type of the resource
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancersPostPostBodyTargetsFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>(undefined, [Validators.required]),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancersPostPostBodyTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyTargetsIp {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancersPostPostBodyTargetsIpFormProperties {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsIpFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsIpFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBodyTargetsLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Load_balancersPostPostBodyTargetsLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsLabel_selectorFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBodyTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancersPostPostBodyTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsServerFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancersPostPostBodyTargetsTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancersPostPostBodyTargetsTargetsHealth_status?: Array<Load_balancersPostPostBodyTargetsTargetsHealth_status>;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancersPostPostBodyTargetsTargetsServer;

		/** Type of the resource. Here always "server". */
		type?: string | null;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancersPostPostBodyTargetsTargetsFormProperties {

		/** Type of the resource. Here always "server". */
		type: FormControl<string | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsTargetsFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsTargetsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyTargetsTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancersPostPostBodyTargetsTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancersPostPostBodyTargetsTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancersPostPostBodyTargetsTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancersPostPostBodyTargetsTargetsServerFormGroup() {
		return new FormGroup<Load_balancersPostPostBodyTargetsTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturn {

		/** Required */
		load_balancer: Load_balancers_idGetReturnLoad_balancer;
	}
	export interface Load_balancers_idGetReturnFormProperties {
	}
	export function CreateLoad_balancers_idGetReturnFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnFormProperties>({
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancer {

		/**
		 * Algorithm of the Load Balancer
		 * Required
		 */
		algorithm: Load_balancers_idGetReturnLoad_balancerAlgorithm;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: number;

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/** Required */
		load_balancer_type: Load_balancers_idGetReturnLoad_balancerLoad_balancer_type;

		/** Required */
		location: Load_balancers_idGetReturnLoad_balancerLocation;

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: number;

		/**
		 * Private networks information
		 * Required
		 */
		Load_balancers_idGetReturnLoad_balancerPrivate_net: Array<Load_balancers_idGetReturnLoad_balancerPrivate_net>;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Load_balancers_idGetReturnLoad_balancerProtection;

		/**
		 * Public network information
		 * Required
		 */
		public_net: Load_balancers_idGetReturnLoad_balancerPublic_net;

		/**
		 * List of services that belong to this Load Balancer
		 * Required
		 */
		Load_balancers_idGetReturnLoad_balancerServices: Array<Load_balancers_idGetReturnLoad_balancerServices>;

		/**
		 * List of targets that belong to this Load Balancer
		 * Required
		 */
		Load_balancers_idGetReturnLoad_balancerTargets: Array<Load_balancers_idGetReturnLoad_balancerTargets>;
	}
	export interface Load_balancers_idGetReturnLoad_balancerFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: FormControl<number | null | undefined>,

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			included_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ingoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outgoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerAlgorithm {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType;
	}
	export interface Load_balancers_idGetReturnLoad_balancerAlgorithmFormProperties {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerAlgorithmFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerAlgorithmFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_type {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: string;

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: number;

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: number;

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: number;

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: number;

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: number;

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different network zones
		 * Required
		 */
		Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePrices: Array<Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePrices>;
	}
	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typeFormProperties {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: FormControl<number | null | undefined>,

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: FormControl<number | null | undefined>,

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: FormControl<number | null | undefined>,

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerLoad_balancer_typeFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerLoad_balancer_typeFormProperties>({
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_assigned_certificates: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_connections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_services: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_targets: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Resource in this Location
		 * Required
		 */
		price_hourly: Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Resource in this Location
		 * Required
		 */
		price_monthly: Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_monthly;
	}
	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerLoad_balancer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Load_balancers_idGetReturnLoad_balancerLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerLocationFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerPrivate_net {
		ip?: string | null;
		network?: number | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerPrivate_netFormProperties {
		ip: FormControl<string | null | undefined>,
		network: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerPrivate_netFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerPrivate_netFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Load_balancers_idGetReturnLoad_balancerProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerProtectionFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerPublic_net {

		/**
		 * Public Interface enabled or not
		 * Required
		 */
		enabled: boolean;

		/**
		 * IP address (v4)
		 * Required
		 */
		ipv4: Load_balancers_idGetReturnLoad_balancerPublic_netIpv4;

		/**
		 * IP address (v6)
		 * Required
		 */
		ipv6: Load_balancers_idGetReturnLoad_balancerPublic_netIpv6;
	}
	export interface Load_balancers_idGetReturnLoad_balancerPublic_netFormProperties {

		/**
		 * Public Interface enabled or not
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerPublic_netFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerPublic_netFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerPublic_netIpv4 {

		/** Reverse DNS PTR entry for the IPv4 address of this Load Balancer */
		dns_ptr?: string | null;

		/** IP address (v4) of this Load Balancer */
		ip?: string | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerPublic_netIpv4FormProperties {

		/** Reverse DNS PTR entry for the IPv4 address of this Load Balancer */
		dns_ptr: FormControl<string | null | undefined>,

		/** IP address (v4) of this Load Balancer */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerPublic_netIpv4FormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerPublic_netIpv4FormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerPublic_netIpv6 {

		/** Reverse DNS PTR entry for the IPv6 address of this Load Balancer */
		dns_ptr?: string | null;

		/** IP address (v6) of this Load Balancer */
		ip?: string | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerPublic_netIpv6FormProperties {

		/** Reverse DNS PTR entry for the IPv6 address of this Load Balancer */
		dns_ptr: FormControl<string | null | undefined>,

		/** IP address (v6) of this Load Balancer */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerPublic_netIpv6FormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerPublic_netIpv6FormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerServices {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: number;

		/**
		 * Service health check
		 * Required
		 */
		health_check: Load_balancers_idGetReturnLoad_balancerServicesHealth_check;

		/** Configuration option for protocols http and https */
		http?: Load_balancers_idGetReturnLoad_balancerServicesHttp;

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: number;

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol;

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: boolean;
	}
	export interface Load_balancers_idGetReturnLoad_balancerServicesFormProperties {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: FormControl<number | null | undefined>,

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>,

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerServicesFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerServicesFormProperties>({
			destination_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>(undefined, [Validators.required]),
			proxyprotocol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerServicesHealth_check {

		/** Additional configuration for protocol http */
		http?: Load_balancers_idGetReturnLoad_balancerServicesHealth_checkHttp;

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: number;

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: number;

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol;

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: number;

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: number;
	}
	export interface Load_balancers_idGetReturnLoad_balancerServicesHealth_checkFormProperties {

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: FormControl<number | null | undefined>,

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>,

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerServicesHealth_checkFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerServicesHealth_checkFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerServicesHealth_checkHttp {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: string;

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: string;

		/** String that must be contained in HTTP response in order to pass the health check */
		response?: string | null;

		/** List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??. */
		status_codes?: Array<string>;

		/** Use HTTPS for health check */
		tls?: boolean | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerServicesHealth_checkHttpFormProperties {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** String that must be contained in HTTP response in order to pass the health check */
		response: FormControl<string | null | undefined>,

		/** Use HTTPS for health check */
		tls: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerServicesHealth_checkHttpFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerServicesHealth_checkHttpFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined),
			tls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerServicesHttp {

		/** IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http" */
		certificates?: Array<number>;

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime?: number | null;

		/** Name of the cookie used for sticky sessions */
		cookie_name?: string | null;

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http?: boolean | null;

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions?: boolean | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerServicesHttpFormProperties {

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime: FormControl<number | null | undefined>,

		/** Name of the cookie used for sticky sessions */
		cookie_name: FormControl<string | null | undefined>,

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http: FormControl<boolean | null | undefined>,

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerServicesHttpFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerServicesHttpFormProperties>({
			cookie_lifetime: new FormControl<number | null | undefined>(undefined),
			cookie_name: new FormControl<string | null | undefined>(undefined),
			redirect_http: new FormControl<boolean | null | undefined>(undefined),
			sticky_sessions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancers_idGetReturnLoad_balancerTargetsHealth_status?: Array<Load_balancers_idGetReturnLoad_balancerTargetsHealth_status>;

		/** IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip". */
		ip?: Load_balancers_idGetReturnLoad_balancerTargetsIp;

		/** Label selector used to determine targets. Only present for target type "label_selector". */
		label_selector?: Load_balancers_idGetReturnLoad_balancerTargetsLabel_selector;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancers_idGetReturnLoad_balancerTargetsServer;

		/** List of resolved label selector target Servers. Only present for type "label_selector". */
		Load_balancers_idGetReturnLoad_balancerTargetsTargets?: Array<Load_balancers_idGetReturnLoad_balancerTargetsTargets>;

		/**
		 * Type of the resource
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>(undefined, [Validators.required]),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsIp {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsIpFormProperties {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsIpFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsIpFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsLabel_selectorFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsServerFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancers_idGetReturnLoad_balancerTargetsTargetsHealth_status?: Array<Load_balancers_idGetReturnLoad_balancerTargetsTargetsHealth_status>;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancers_idGetReturnLoad_balancerTargetsTargetsServer;

		/** Type of the resource. Here always "server". */
		type?: string | null;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsTargetsFormProperties {

		/** Type of the resource. Here always "server". */
		type: FormControl<string | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsTargetsFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsTargetsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idGetReturnLoad_balancerTargetsTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancers_idGetReturnLoad_balancerTargetsTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idGetReturnLoad_balancerTargetsTargetsServerFormGroup() {
		return new FormGroup<Load_balancers_idGetReturnLoad_balancerTargetsTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New Load Balancer name */
		name?: string | null;
	}
	export interface Load_balancers_idPutPutBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New Load Balancer name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutPutBodyFormGroup() {
		return new FormGroup<Load_balancers_idPutPutBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturn {

		/** Required */
		load_balancer: Load_balancers_idPutReturnLoad_balancer;
	}
	export interface Load_balancers_idPutReturnFormProperties {
	}
	export function CreateLoad_balancers_idPutReturnFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnFormProperties>({
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancer {

		/**
		 * Algorithm of the Load Balancer
		 * Required
		 */
		algorithm: Load_balancers_idPutReturnLoad_balancerAlgorithm;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: number;

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/** Required */
		load_balancer_type: Load_balancers_idPutReturnLoad_balancerLoad_balancer_type;

		/** Required */
		location: Load_balancers_idPutReturnLoad_balancerLocation;

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: number;

		/**
		 * Private networks information
		 * Required
		 */
		Load_balancers_idPutReturnLoad_balancerPrivate_net: Array<Load_balancers_idPutReturnLoad_balancerPrivate_net>;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Load_balancers_idPutReturnLoad_balancerProtection;

		/**
		 * Public network information
		 * Required
		 */
		public_net: Load_balancers_idPutReturnLoad_balancerPublic_net;

		/**
		 * List of services that belong to this Load Balancer
		 * Required
		 */
		Load_balancers_idPutReturnLoad_balancerServices: Array<Load_balancers_idPutReturnLoad_balancerServices>;

		/**
		 * List of targets that belong to this Load Balancer
		 * Required
		 */
		Load_balancers_idPutReturnLoad_balancerTargets: Array<Load_balancers_idPutReturnLoad_balancerTargets>;
	}
	export interface Load_balancers_idPutReturnLoad_balancerFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: FormControl<number | null | undefined>,

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			included_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ingoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outgoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerAlgorithm {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType;
	}
	export interface Load_balancers_idPutReturnLoad_balancerAlgorithmFormProperties {

		/**
		 * Type of the algorithm
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerAlgorithmFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerAlgorithmFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_type {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: string;

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: number;

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: number;

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: number;

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: number;

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: number;

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different network zones
		 * Required
		 */
		Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePrices: Array<Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePrices>;
	}
	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typeFormProperties {

		/**
		 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Load Balancer type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Load Balancer type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Number of SSL Certificates that can be assigned to a single Load Balancer
		 * Required
		 */
		max_assigned_certificates: FormControl<number | null | undefined>,

		/**
		 * Number of maximum simultaneous open connections
		 * Required
		 */
		max_connections: FormControl<number | null | undefined>,

		/**
		 * Number of services a Load Balancer of this type can have
		 * Required
		 */
		max_services: FormControl<number | null | undefined>,

		/**
		 * Number of targets a single Load Balancer can have
		 * Required
		 */
		max_targets: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Load Balancer type
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerLoad_balancer_typeFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerLoad_balancer_typeFormProperties>({
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_assigned_certificates: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_connections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_services: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max_targets: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Resource in this Location
		 * Required
		 */
		price_hourly: Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Resource in this Location
		 * Required
		 */
		price_monthly: Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_monthly;
	}
	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerLoad_balancer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Load_balancers_idPutReturnLoad_balancerLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerLocationFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerPrivate_net {
		ip?: string | null;
		network?: number | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerPrivate_netFormProperties {
		ip: FormControl<string | null | undefined>,
		network: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerPrivate_netFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerPrivate_netFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Load_balancers_idPutReturnLoad_balancerProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerProtectionFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerPublic_net {

		/**
		 * Public Interface enabled or not
		 * Required
		 */
		enabled: boolean;

		/**
		 * IP address (v4)
		 * Required
		 */
		ipv4: Load_balancers_idPutReturnLoad_balancerPublic_netIpv4;

		/**
		 * IP address (v6)
		 * Required
		 */
		ipv6: Load_balancers_idPutReturnLoad_balancerPublic_netIpv6;
	}
	export interface Load_balancers_idPutReturnLoad_balancerPublic_netFormProperties {

		/**
		 * Public Interface enabled or not
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerPublic_netFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerPublic_netFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerPublic_netIpv4 {

		/** Reverse DNS PTR entry for the IPv4 address of this Load Balancer */
		dns_ptr?: string | null;

		/** IP address (v4) of this Load Balancer */
		ip?: string | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerPublic_netIpv4FormProperties {

		/** Reverse DNS PTR entry for the IPv4 address of this Load Balancer */
		dns_ptr: FormControl<string | null | undefined>,

		/** IP address (v4) of this Load Balancer */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerPublic_netIpv4FormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerPublic_netIpv4FormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerPublic_netIpv6 {

		/** Reverse DNS PTR entry for the IPv6 address of this Load Balancer */
		dns_ptr?: string | null;

		/** IP address (v6) of this Load Balancer */
		ip?: string | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerPublic_netIpv6FormProperties {

		/** Reverse DNS PTR entry for the IPv6 address of this Load Balancer */
		dns_ptr: FormControl<string | null | undefined>,

		/** IP address (v6) of this Load Balancer */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerPublic_netIpv6FormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerPublic_netIpv6FormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerServices {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: number;

		/**
		 * Service health check
		 * Required
		 */
		health_check: Load_balancers_idPutReturnLoad_balancerServicesHealth_check;

		/** Configuration option for protocols http and https */
		http?: Load_balancers_idPutReturnLoad_balancerServicesHttp;

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: number;

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol;

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: boolean;
	}
	export interface Load_balancers_idPutReturnLoad_balancerServicesFormProperties {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: FormControl<number | null | undefined>,

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>,

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerServicesFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerServicesFormProperties>({
			destination_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>(undefined, [Validators.required]),
			proxyprotocol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerServicesHealth_check {

		/** Additional configuration for protocol http */
		http?: Load_balancers_idPutReturnLoad_balancerServicesHealth_checkHttp;

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: number;

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: number;

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol;

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: number;

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: number;
	}
	export interface Load_balancers_idPutReturnLoad_balancerServicesHealth_checkFormProperties {

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: FormControl<number | null | undefined>,

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>,

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerServicesHealth_checkFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerServicesHealth_checkFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerServicesHealth_checkHttp {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: string;

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: string;

		/** String that must be contained in HTTP response in order to pass the health check */
		response?: string | null;

		/** List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??. */
		status_codes?: Array<string>;

		/** Use HTTPS for health check */
		tls?: boolean | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerServicesHealth_checkHttpFormProperties {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** String that must be contained in HTTP response in order to pass the health check */
		response: FormControl<string | null | undefined>,

		/** Use HTTPS for health check */
		tls: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerServicesHealth_checkHttpFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerServicesHealth_checkHttpFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined),
			tls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerServicesHttp {

		/** IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http" */
		certificates?: Array<number>;

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime?: number | null;

		/** Name of the cookie used for sticky sessions */
		cookie_name?: string | null;

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http?: boolean | null;

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions?: boolean | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerServicesHttpFormProperties {

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime: FormControl<number | null | undefined>,

		/** Name of the cookie used for sticky sessions */
		cookie_name: FormControl<string | null | undefined>,

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http: FormControl<boolean | null | undefined>,

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerServicesHttpFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerServicesHttpFormProperties>({
			cookie_lifetime: new FormControl<number | null | undefined>(undefined),
			cookie_name: new FormControl<string | null | undefined>(undefined),
			redirect_http: new FormControl<boolean | null | undefined>(undefined),
			sticky_sessions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancers_idPutReturnLoad_balancerTargetsHealth_status?: Array<Load_balancers_idPutReturnLoad_balancerTargetsHealth_status>;

		/** IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip". */
		ip?: Load_balancers_idPutReturnLoad_balancerTargetsIp;

		/** Label selector used to determine targets. Only present for target type "label_selector". */
		label_selector?: Load_balancers_idPutReturnLoad_balancerTargetsLabel_selector;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancers_idPutReturnLoad_balancerTargetsServer;

		/** List of resolved label selector target Servers. Only present for type "label_selector". */
		Load_balancers_idPutReturnLoad_balancerTargetsTargets?: Array<Load_balancers_idPutReturnLoad_balancerTargetsTargets>;

		/**
		 * Type of the resource
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>(undefined, [Validators.required]),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsIp {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsIpFormProperties {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsIpFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsIpFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsLabel_selectorFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsServerFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsTargets {

		/** List of health statuses of the services on this target. Only present for target types "server" and "ip". */
		Load_balancers_idPutReturnLoad_balancerTargetsTargetsHealth_status?: Array<Load_balancers_idPutReturnLoad_balancerTargetsTargetsHealth_status>;

		/** Server where the traffic should be routed to. Only present for target type "server". */
		server?: Load_balancers_idPutReturnLoad_balancerTargetsTargetsServer;

		/** Type of the resource. Here always "server". */
		type?: string | null;

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsTargetsFormProperties {

		/** Type of the resource. Here always "server". */
		type: FormControl<string | null | undefined>,

		/** Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector". */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsTargetsFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsTargetsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsTargetsHealth_status {
		listen_port?: number | null;
		status?: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsTargetsHealth_statusFormProperties {
		listen_port: FormControl<number | null | undefined>,
		status: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsTargetsHealth_statusFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsTargetsHealth_statusFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsHealth_statusStatus | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idPutReturnLoad_balancerTargetsTargetsServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancers_idPutReturnLoad_balancerTargetsTargetsServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idPutReturnLoad_balancerTargetsTargetsServerFormGroup() {
		return new FormGroup<Load_balancers_idPutReturnLoad_balancerTargetsTargetsServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsGetBySortAndStatusReturn {

		/** Required */
		Load_balancers_idActionsGetBySortAndStatusReturnActions: Array<Load_balancers_idActionsGetBySortAndStatusReturnActions>;
		meta?: Load_balancers_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Load_balancers_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateLoad_balancers_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Load_balancers_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Load_balancers_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Load_balancers_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Load_balancers_idActionsGetBySortAndStatusReturnActionsResources: Array<Load_balancers_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Load_balancers_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Load_balancers_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Load_balancers_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Load_balancers_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Load_balancers_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Load_balancers_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Load_balancers_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Load_balancers_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateLoad_balancers_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Load_balancers_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Load_balancers_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Load_balancers_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Load_balancers_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsAdd_servicePostPostBody {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: number;

		/**
		 * Service health check
		 * Required
		 */
		health_check: Load_balancers_idActionsAdd_servicePostPostBodyHealth_check;

		/** Configuration option for protocols http and https */
		http?: Load_balancers_idActionsAdd_servicePostPostBodyHttp;

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: number;

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol;

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: boolean;
	}
	export interface Load_balancers_idActionsAdd_servicePostPostBodyFormProperties {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: FormControl<number | null | undefined>,

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>,

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_servicePostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_servicePostPostBodyFormProperties>({
			destination_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>(undefined, [Validators.required]),
			proxyprotocol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsAdd_servicePostPostBodyHealth_check {

		/** Additional configuration for protocol http */
		http?: Load_balancers_idActionsAdd_servicePostPostBodyHealth_checkHttp;

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: number;

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: number;

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol;

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: number;

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: number;
	}
	export interface Load_balancers_idActionsAdd_servicePostPostBodyHealth_checkFormProperties {

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: FormControl<number | null | undefined>,

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>,

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_servicePostPostBodyHealth_checkFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_servicePostPostBodyHealth_checkFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsAdd_servicePostPostBodyHealth_checkHttp {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: string;

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: string;

		/** String that must be contained in HTTP response in order to pass the health check */
		response?: string | null;

		/** List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??. */
		status_codes?: Array<string>;

		/** Use HTTPS for health check */
		tls?: boolean | null;
	}
	export interface Load_balancers_idActionsAdd_servicePostPostBodyHealth_checkHttpFormProperties {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** String that must be contained in HTTP response in order to pass the health check */
		response: FormControl<string | null | undefined>,

		/** Use HTTPS for health check */
		tls: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_servicePostPostBodyHealth_checkHttpFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_servicePostPostBodyHealth_checkHttpFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined),
			tls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idActionsAdd_servicePostPostBodyHttp {

		/** IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http" */
		certificates?: Array<number>;

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime?: number | null;

		/** Name of the cookie used for sticky sessions */
		cookie_name?: string | null;

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http?: boolean | null;

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions?: boolean | null;
	}
	export interface Load_balancers_idActionsAdd_servicePostPostBodyHttpFormProperties {

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime: FormControl<number | null | undefined>,

		/** Name of the cookie used for sticky sessions */
		cookie_name: FormControl<string | null | undefined>,

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http: FormControl<boolean | null | undefined>,

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_servicePostPostBodyHttpFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_servicePostPostBodyHttpFormProperties>({
			cookie_lifetime: new FormControl<number | null | undefined>(undefined),
			cookie_name: new FormControl<string | null | undefined>(undefined),
			redirect_http: new FormControl<boolean | null | undefined>(undefined),
			sticky_sessions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idActionsAdd_targetPostPostBody {

		/** IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip". */
		ip?: Load_balancers_idActionsAdd_targetPostPostBodyIp;

		/** Configuration for label selector targets, required if type is `label_selector` */
		label_selector?: Load_balancers_idActionsAdd_targetPostPostBodyLabel_selector;

		/** Configuration for type Server, required if type is `server` */
		server?: Load_balancers_idActionsAdd_targetPostPostBodyServer;

		/**
		 * Type of the resource
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType;

		/** Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network. Default value is false. */
		use_private_ip?: boolean | null;
	}
	export interface Load_balancers_idActionsAdd_targetPostPostBodyFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>,

		/** Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network. Default value is false. */
		use_private_ip: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_targetPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_targetPostPostBodyFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>(undefined, [Validators.required]),
			use_private_ip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idActionsAdd_targetPostPostBodyIp {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancers_idActionsAdd_targetPostPostBodyIpFormProperties {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_targetPostPostBodyIpFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_targetPostPostBodyIpFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsAdd_targetPostPostBodyLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Load_balancers_idActionsAdd_targetPostPostBodyLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_targetPostPostBodyLabel_selectorFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_targetPostPostBodyLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsAdd_targetPostPostBodyServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancers_idActionsAdd_targetPostPostBodyServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAdd_targetPostPostBodyServerFormGroup() {
		return new FormGroup<Load_balancers_idActionsAdd_targetPostPostBodyServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsAttach_to_networkPostPostBody {

		/** IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address */
		ip?: string | null;

		/**
		 * ID of an existing network to attach the Load Balancer to
		 * Required
		 */
		network: number;
	}
	export interface Load_balancers_idActionsAttach_to_networkPostPostBodyFormProperties {

		/** IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address */
		ip: FormControl<string | null | undefined>,

		/**
		 * ID of an existing network to attach the Load Balancer to
		 * Required
		 */
		network: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsAttach_to_networkPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsAttach_to_networkPostPostBodyFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsChange_algorithmPostPostBody {

		/**
		 * Algorithm of the Load Balancer
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType;
	}
	export interface Load_balancers_idActionsChange_algorithmPostPostBodyFormProperties {

		/**
		 * Algorithm of the Load Balancer
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsChange_algorithmPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsChange_algorithmPostPostBodyFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersAlgorithmType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsChange_dns_ptrPostPostBody {

		/**
		 * Hostname to set as a reverse DNS PTR entry
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Public IP address for which the reverse DNS entry should be set
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancers_idActionsChange_dns_ptrPostPostBodyFormProperties {

		/**
		 * Hostname to set as a reverse DNS PTR entry
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Public IP address for which the reverse DNS entry should be set
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsChange_dns_ptrPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsChange_dns_ptrPostPostBodyFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsChange_protectionPostPostBody {

		/** If true, prevents the Load Balancer from being deleted */
		delete?: boolean | null;
	}
	export interface Load_balancers_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the Load Balancer from being deleted */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idActionsChange_typePostPostBody {

		/**
		 * ID or name of Load Balancer type the Load Balancer should migrate to
		 * Required
		 */
		load_balancer_type: string;
	}
	export interface Load_balancers_idActionsChange_typePostPostBodyFormProperties {

		/**
		 * ID or name of Load Balancer type the Load Balancer should migrate to
		 * Required
		 */
		load_balancer_type: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsChange_typePostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsChange_typePostPostBodyFormProperties>({
			load_balancer_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsDelete_servicePostPostBody {

		/**
		 * The listen port of the service you want to delete
		 * Required
		 */
		listen_port: number;
	}
	export interface Load_balancers_idActionsDelete_servicePostPostBodyFormProperties {

		/**
		 * The listen port of the service you want to delete
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsDelete_servicePostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsDelete_servicePostPostBodyFormProperties>({
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsDetach_from_networkPostPostBody {

		/**
		 * ID of an existing network to detach the Load Balancer from
		 * Required
		 */
		network: number;
	}
	export interface Load_balancers_idActionsDetach_from_networkPostPostBodyFormProperties {

		/**
		 * ID of an existing network to detach the Load Balancer from
		 * Required
		 */
		network: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsDetach_from_networkPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsDetach_from_networkPostPostBodyFormProperties>({
			network: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsRemove_targetPostPostBody {

		/** IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip". */
		ip?: Load_balancers_idActionsRemove_targetPostPostBodyIp;

		/** Configuration for label selector targets, required if type is `label_selector` */
		label_selector?: Load_balancers_idActionsRemove_targetPostPostBodyLabel_selector;

		/** Configuration for type Server, required if type is `server` */
		server?: Load_balancers_idActionsRemove_targetPostPostBodyServer;

		/**
		 * Type of the resource
		 * Required
		 */
		type: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType;
	}
	export interface Load_balancers_idActionsRemove_targetPostPostBodyFormProperties {

		/**
		 * Type of the resource
		 * Required
		 */
		type: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsRemove_targetPostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsRemove_targetPostPostBodyFormProperties>({
			type: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersTargetsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsRemove_targetPostPostBodyIp {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: string;
	}
	export interface Load_balancers_idActionsRemove_targetPostPostBodyIpFormProperties {

		/**
		 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsRemove_targetPostPostBodyIpFormGroup() {
		return new FormGroup<Load_balancers_idActionsRemove_targetPostPostBodyIpFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsRemove_targetPostPostBodyLabel_selector {

		/**
		 * Label selector
		 * Required
		 */
		selector: string;
	}
	export interface Load_balancers_idActionsRemove_targetPostPostBodyLabel_selectorFormProperties {

		/**
		 * Label selector
		 * Required
		 */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsRemove_targetPostPostBodyLabel_selectorFormGroup() {
		return new FormGroup<Load_balancers_idActionsRemove_targetPostPostBodyLabel_selectorFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsRemove_targetPostPostBodyServer {

		/**
		 * ID of the Server
		 * Required
		 */
		id: number;
	}
	export interface Load_balancers_idActionsRemove_targetPostPostBodyServerFormProperties {

		/**
		 * ID of the Server
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsRemove_targetPostPostBodyServerFormGroup() {
		return new FormGroup<Load_balancers_idActionsRemove_targetPostPostBodyServerFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsUpdate_servicePostPostBody {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: number;

		/**
		 * Service health check
		 * Required
		 */
		health_check: Load_balancers_idActionsUpdate_servicePostPostBodyHealth_check;

		/** Configuration option for protocols http and https */
		http?: Load_balancers_idActionsUpdate_servicePostPostBodyHttp;

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: number;

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol;

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: boolean;
	}
	export interface Load_balancers_idActionsUpdate_servicePostPostBodyFormProperties {

		/**
		 * Port the Load Balancer will balance to
		 * Required
		 */
		destination_port: FormControl<number | null | undefined>,

		/**
		 * Port the Load Balancer listens on
		 * Required
		 */
		listen_port: FormControl<number | null | undefined>,

		/**
		 * Protocol of the Load Balancer
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>,

		/**
		 * Is Proxyprotocol enabled or not
		 * Required
		 */
		proxyprotocol: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsUpdate_servicePostPostBodyFormGroup() {
		return new FormGroup<Load_balancers_idActionsUpdate_servicePostPostBodyFormProperties>({
			destination_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listen_port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesProtocol | null | undefined>(undefined, [Validators.required]),
			proxyprotocol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsUpdate_servicePostPostBodyHealth_check {

		/** Additional configuration for protocol http */
		http?: Load_balancers_idActionsUpdate_servicePostPostBodyHealth_checkHttp;

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: number;

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: number;

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol;

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: number;

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: number;
	}
	export interface Load_balancers_idActionsUpdate_servicePostPostBodyHealth_checkFormProperties {

		/**
		 * Time interval in seconds health checks are performed
		 * Required
		 */
		interval: FormControl<number | null | undefined>,

		/**
		 * Port the health check will be performed on
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Type of the health check
		 * Required
		 */
		protocol: FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>,

		/**
		 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Time in seconds after an attempt is considered a timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsUpdate_servicePostPostBodyHealth_checkFormGroup() {
		return new FormGroup<Load_balancers_idActionsUpdate_servicePostPostBodyHealth_checkFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Load_balancersGetBySortAndNameAndLabel_selectorReturnLoad_balancersServicesHealth_checkProtocol | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActionsUpdate_servicePostPostBodyHealth_checkHttp {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: string;

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: string;

		/** String that must be contained in HTTP response in order to pass the health check */
		response?: string | null;

		/** List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??. */
		status_codes?: Array<string>;

		/** Use HTTPS for health check */
		tls?: boolean | null;
	}
	export interface Load_balancers_idActionsUpdate_servicePostPostBodyHealth_checkHttpFormProperties {

		/**
		 * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** String that must be contained in HTTP response in order to pass the health check */
		response: FormControl<string | null | undefined>,

		/** Use HTTPS for health check */
		tls: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsUpdate_servicePostPostBodyHealth_checkHttpFormGroup() {
		return new FormGroup<Load_balancers_idActionsUpdate_servicePostPostBodyHealth_checkHttpFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined),
			tls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idActionsUpdate_servicePostPostBodyHttp {

		/** IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http" */
		certificates?: Array<number>;

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime?: number | null;

		/** Name of the cookie used for sticky sessions */
		cookie_name?: string | null;

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http?: boolean | null;

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions?: boolean | null;
	}
	export interface Load_balancers_idActionsUpdate_servicePostPostBodyHttpFormProperties {

		/** Lifetime of the cookie used for sticky sessions */
		cookie_lifetime: FormControl<number | null | undefined>,

		/** Name of the cookie used for sticky sessions */
		cookie_name: FormControl<string | null | undefined>,

		/** Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false` */
		redirect_http: FormControl<boolean | null | undefined>,

		/** Use sticky sessions. Only available if protocol is "http" or "https". Default `false` */
		sticky_sessions: FormControl<boolean | null | undefined>,
	}
	export function CreateLoad_balancers_idActionsUpdate_servicePostPostBodyHttpFormGroup() {
		return new FormGroup<Load_balancers_idActionsUpdate_servicePostPostBodyHttpFormProperties>({
			cookie_lifetime: new FormControl<number | null | undefined>(undefined),
			cookie_name: new FormControl<string | null | undefined>(undefined),
			redirect_http: new FormControl<boolean | null | undefined>(undefined),
			sticky_sessions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Load_balancers_idActions_action_idGetReturn {

		/** Required */
		action: Load_balancers_idActions_action_idGetReturnAction;
	}
	export interface Load_balancers_idActions_action_idGetReturnFormProperties {
	}
	export function CreateLoad_balancers_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Load_balancers_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Load_balancers_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Load_balancers_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Load_balancers_idActions_action_idGetReturnActionResources: Array<Load_balancers_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Load_balancers_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateLoad_balancers_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Load_balancers_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Load_balancers_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Load_balancers_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Load_balancers_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLoad_balancers_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Load_balancers_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepType { open_connections = 'open_connections', connections_per_second = 'connections_per_second', requests_per_second = 'requests_per_second', bandwidth = 'bandwidth' }

	export interface Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturn {

		/** Required */
		metrics: Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetrics;
	}
	export interface Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnFormProperties {
	}
	export function CreateLoad_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnFormGroup() {
		return new FormGroup<Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnFormProperties>({
		});

	}

	export interface Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetrics {

		/**
		 * End of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		end: string;

		/**
		 * Start of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		start: string;

		/**
		 * Resolution of results in seconds.
		 * Required
		 */
		step: number;

		/**
		 * Hash with timeseries information, containing the name of timeseries as key
		 * Required
		 */
		time_series: {[id: string]: Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series };
	}
	export interface Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsFormProperties {

		/**
		 * End of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		end: FormControl<string | null | undefined>,

		/**
		 * Start of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		start: FormControl<string | null | undefined>,

		/**
		 * Resolution of results in seconds.
		 * Required
		 */
		step: FormControl<number | null | undefined>,

		/**
		 * Hash with timeseries information, containing the name of timeseries as key
		 * Required
		 */
		time_series: FormControl<{[id: string]: Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series } | null | undefined>,
	}
	export function CreateLoad_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsFormGroup() {
		return new FormGroup<Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsFormProperties>({
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			step: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time_series: new FormControl<{[id: string]: Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series {

		/**
		 * Metrics Timestamps with values
		 * Required
		 */
		values: Array<string>;
	}
	export interface Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_seriesFormProperties {
	}
	export function CreateLoad_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_seriesFormGroup() {
		return new FormGroup<Load_balancers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_seriesFormProperties>({
		});

	}

	export interface LocationsGetByNameReturn {

		/** Required */
		LocationsGetByNameReturnLocations: Array<LocationsGetByNameReturnLocations>;
	}
	export interface LocationsGetByNameReturnFormProperties {
	}
	export function CreateLocationsGetByNameReturnFormGroup() {
		return new FormGroup<LocationsGetByNameReturnFormProperties>({
		});

	}

	export interface LocationsGetByNameReturnLocations {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface LocationsGetByNameReturnLocationsFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateLocationsGetByNameReturnLocationsFormGroup() {
		return new FormGroup<LocationsGetByNameReturnLocationsFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Locations_idGetReturn {

		/** Required */
		location: Locations_idGetReturnLocation;
	}
	export interface Locations_idGetReturnFormProperties {
	}
	export function CreateLocations_idGetReturnFormGroup() {
		return new FormGroup<Locations_idGetReturnFormProperties>({
		});

	}

	export interface Locations_idGetReturnLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Locations_idGetReturnLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateLocations_idGetReturnLocationFormGroup() {
		return new FormGroup<Locations_idGetReturnLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturn {
		meta?: NetworksGetByNameAndLabel_selectorReturnMeta;

		/** Required */
		NetworksGetByNameAndLabel_selectorReturnNetworks: Array<NetworksGetByNameAndLabel_selectorReturnNetworks>;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnFormProperties {
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnFormProperties>({
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturnMeta {

		/** Required */
		pagination: NetworksGetByNameAndLabel_selectorReturnMetaPagination;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnMetaFormProperties {
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnMetaFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnMetaFormProperties>({
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnMetaPaginationFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturnNetworks {

		/**
		 * Point in time when the Network was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Network
		 * Required
		 */
		id: number;

		/**
		 * IPv4 prefix of the whole Network
		 * Required
		 */
		ip_range: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: string;

		/** Array of IDs of Load Balancers attached to this Network */
		load_balancers?: Array<number>;

		/**
		 * Name of the Network
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Network
		 * Required
		 */
		protection: NetworksGetByNameAndLabel_selectorReturnNetworksProtection;

		/**
		 * Array of routes set in this Network
		 * Required
		 */
		NetworksGetByNameAndLabel_selectorReturnNetworksRoutes: Array<NetworksGetByNameAndLabel_selectorReturnNetworksRoutes>;

		/**
		 * Array of IDs of Servers attached to this Network
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Array subnets allocated in this Network
		 * Required
		 */
		NetworksGetByNameAndLabel_selectorReturnNetworksSubnets: Array<NetworksGetByNameAndLabel_selectorReturnNetworksSubnets>;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnNetworksFormProperties {

		/**
		 * Point in time when the Network was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Network
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IPv4 prefix of the whole Network
		 * Required
		 */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the Network
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnNetworksFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnNetworksFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip_range: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturnNetworksProtection {

		/**
		 * If true, prevents the Network from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnNetworksProtectionFormProperties {

		/**
		 * If true, prevents the Network from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnNetworksProtectionFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnNetworksProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturnNetworksRoutes {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: string;

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: string;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnNetworksRoutesFormProperties {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnNetworksRoutesFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnNetworksRoutesFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksGetByNameAndLabel_selectorReturnNetworksSubnets {

		/**
		 * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
		 * Required
		 */
		gateway: string;

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range?: string | null;

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: string;

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType;
	}
	export interface NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsFormProperties {

		/**
		 * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>,
	}
	export function CreateNetworksGetByNameAndLabel_selectorReturnNetworksSubnetsFormGroup() {
		return new FormGroup<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsFormProperties>({
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip_range: new FormControl<string | null | undefined>(undefined),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType { cloud = 'cloud', server = 'server', vswitch = 'vswitch' }

	export interface NetworksPostPostBody {

		/**
		 * IP range of the whole network which must span all included subnets. Must be one of the private IPv4 ranges of RFC1918. Minimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.
		 * Required
		 */
		ip_range: string;

		/** User-defined labels (key-value pairs) */
		labels?: NetworksPostPostBodyLabels;

		/**
		 * Name of the network
		 * Required
		 */
		name: string;

		/** Array of routes set in this network. The destination of the route must be one of the private IPv4 ranges of RFC1918. The gateway must be a subnet/IP of the ip_range of the network object. The destination must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. The gateway cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1. */
		NetworksPostPostBodyRoutes?: Array<NetworksPostPostBodyRoutes>;

		/** Array of subnets allocated. */
		NetworksPostPostBodySubnets?: Array<NetworksPostPostBodySubnets>;
	}
	export interface NetworksPostPostBodyFormProperties {

		/**
		 * IP range of the whole network which must span all included subnets. Must be one of the private IPv4 ranges of RFC1918. Minimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.
		 * Required
		 */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * Name of the network
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNetworksPostPostBodyFormGroup() {
		return new FormGroup<NetworksPostPostBodyFormProperties>({
			ip_range: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksPostPostBodyLabels {

		/** New label */
		labelkey?: string | null;
	}
	export interface NetworksPostPostBodyLabelsFormProperties {

		/** New label */
		labelkey: FormControl<string | null | undefined>,
	}
	export function CreateNetworksPostPostBodyLabelsFormGroup() {
		return new FormGroup<NetworksPostPostBodyLabelsFormProperties>({
			labelkey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworksPostPostBodyRoutes {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: string;

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: string;
	}
	export interface NetworksPostPostBodyRoutesFormProperties {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,
	}
	export function CreateNetworksPostPostBodyRoutesFormGroup() {
		return new FormGroup<NetworksPostPostBodyRoutesFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksPostPostBodySubnets {

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range?: string | null;

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: string;

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType;

		/** ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch. */
		vswitch_id?: number | null;
	}
	export interface NetworksPostPostBodySubnetsFormProperties {

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>,

		/** ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch. */
		vswitch_id: FormControl<number | null | undefined>,
	}
	export function CreateNetworksPostPostBodySubnetsFormGroup() {
		return new FormGroup<NetworksPostPostBodySubnetsFormProperties>({
			ip_range: new FormControl<string | null | undefined>(undefined),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>(undefined, [Validators.required]),
			vswitch_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Networks_idGetReturn {
		network?: Networks_idGetReturnNetwork;
	}
	export interface Networks_idGetReturnFormProperties {
	}
	export function CreateNetworks_idGetReturnFormGroup() {
		return new FormGroup<Networks_idGetReturnFormProperties>({
		});

	}

	export interface Networks_idGetReturnNetwork {

		/**
		 * Point in time when the Network was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Network
		 * Required
		 */
		id: number;

		/**
		 * IPv4 prefix of the whole Network
		 * Required
		 */
		ip_range: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: string;

		/** Array of IDs of Load Balancers attached to this Network */
		load_balancers?: Array<number>;

		/**
		 * Name of the Network
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Network
		 * Required
		 */
		protection: Networks_idGetReturnNetworkProtection;

		/**
		 * Array of routes set in this Network
		 * Required
		 */
		Networks_idGetReturnNetworkRoutes: Array<Networks_idGetReturnNetworkRoutes>;

		/**
		 * Array of IDs of Servers attached to this Network
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Array subnets allocated in this Network
		 * Required
		 */
		Networks_idGetReturnNetworkSubnets: Array<Networks_idGetReturnNetworkSubnets>;
	}
	export interface Networks_idGetReturnNetworkFormProperties {

		/**
		 * Point in time when the Network was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Network
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IPv4 prefix of the whole Network
		 * Required
		 */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the Network
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idGetReturnNetworkFormGroup() {
		return new FormGroup<Networks_idGetReturnNetworkFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip_range: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idGetReturnNetworkProtection {

		/**
		 * If true, prevents the Network from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Networks_idGetReturnNetworkProtectionFormProperties {

		/**
		 * If true, prevents the Network from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworks_idGetReturnNetworkProtectionFormGroup() {
		return new FormGroup<Networks_idGetReturnNetworkProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idGetReturnNetworkRoutes {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: string;

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: string;
	}
	export interface Networks_idGetReturnNetworkRoutesFormProperties {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idGetReturnNetworkRoutesFormGroup() {
		return new FormGroup<Networks_idGetReturnNetworkRoutesFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idGetReturnNetworkSubnets {

		/**
		 * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
		 * Required
		 */
		gateway: string;

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range?: string | null;

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: string;

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType;
	}
	export interface Networks_idGetReturnNetworkSubnetsFormProperties {

		/**
		 * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>,
	}
	export function CreateNetworks_idGetReturnNetworkSubnetsFormGroup() {
		return new FormGroup<Networks_idGetReturnNetworkSubnetsFormProperties>({
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip_range: new FormControl<string | null | undefined>(undefined),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: Networks_idPutPutBodyLabels;

		/** New network name */
		name?: string | null;
	}
	export interface Networks_idPutPutBodyFormProperties {

		/** New network name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idPutPutBodyFormGroup() {
		return new FormGroup<Networks_idPutPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Networks_idPutPutBodyLabels {
		labelkey?: string | null;
	}
	export interface Networks_idPutPutBodyLabelsFormProperties {
		labelkey: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idPutPutBodyLabelsFormGroup() {
		return new FormGroup<Networks_idPutPutBodyLabelsFormProperties>({
			labelkey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Networks_idPutReturn {
		network?: Networks_idPutReturnNetwork;
	}
	export interface Networks_idPutReturnFormProperties {
	}
	export function CreateNetworks_idPutReturnFormGroup() {
		return new FormGroup<Networks_idPutReturnFormProperties>({
		});

	}

	export interface Networks_idPutReturnNetwork {

		/**
		 * Point in time when the Network was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Network
		 * Required
		 */
		id: number;

		/**
		 * IPv4 prefix of the whole Network
		 * Required
		 */
		ip_range: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: string;

		/** Array of IDs of Load Balancers attached to this Network */
		load_balancers?: Array<number>;

		/**
		 * Name of the Network
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Network
		 * Required
		 */
		protection: Networks_idPutReturnNetworkProtection;

		/**
		 * Array of routes set in this Network
		 * Required
		 */
		Networks_idPutReturnNetworkRoutes: Array<Networks_idPutReturnNetworkRoutes>;

		/**
		 * Array of IDs of Servers attached to this Network
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Array subnets allocated in this Network
		 * Required
		 */
		Networks_idPutReturnNetworkSubnets: Array<Networks_idPutReturnNetworkSubnets>;
	}
	export interface Networks_idPutReturnNetworkFormProperties {

		/**
		 * Point in time when the Network was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Network
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IPv4 prefix of the whole Network
		 * Required
		 */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the Network
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idPutReturnNetworkFormGroup() {
		return new FormGroup<Networks_idPutReturnNetworkFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip_range: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idPutReturnNetworkProtection {

		/**
		 * If true, prevents the Network from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Networks_idPutReturnNetworkProtectionFormProperties {

		/**
		 * If true, prevents the Network from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworks_idPutReturnNetworkProtectionFormGroup() {
		return new FormGroup<Networks_idPutReturnNetworkProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idPutReturnNetworkRoutes {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: string;

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: string;
	}
	export interface Networks_idPutReturnNetworkRoutesFormProperties {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idPutReturnNetworkRoutesFormGroup() {
		return new FormGroup<Networks_idPutReturnNetworkRoutesFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idPutReturnNetworkSubnets {

		/**
		 * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
		 * Required
		 */
		gateway: string;

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range?: string | null;

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: string;

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType;
	}
	export interface Networks_idPutReturnNetworkSubnetsFormProperties {

		/**
		 * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>,
	}
	export function CreateNetworks_idPutReturnNetworkSubnetsFormGroup() {
		return new FormGroup<Networks_idPutReturnNetworkSubnetsFormProperties>({
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip_range: new FormControl<string | null | undefined>(undefined),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsGetBySortAndStatusReturn {

		/** Required */
		Networks_idActionsGetBySortAndStatusReturnActions: Array<Networks_idActionsGetBySortAndStatusReturnActions>;
		meta?: Networks_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Networks_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateNetworks_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Networks_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Networks_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Networks_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Networks_idActionsGetBySortAndStatusReturnActionsResources: Array<Networks_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Networks_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateNetworks_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Networks_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Networks_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Networks_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Networks_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Networks_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Networks_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Networks_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateNetworks_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Networks_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Networks_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Networks_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateNetworks_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Networks_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsAdd_routePostPostBody {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: string;

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: string;
	}
	export interface Networks_idActionsAdd_routePostPostBodyFormProperties {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActionsAdd_routePostPostBodyFormGroup() {
		return new FormGroup<Networks_idActionsAdd_routePostPostBodyFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsAdd_subnetPostPostBody {

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. If the Subnet is of type vSwitch, it also can not overlap with any gateway in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range?: string | null;

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: string;

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType;

		/** ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch. */
		vswitch_id?: number | null;
	}
	export interface Networks_idActionsAdd_subnetPostPostBodyFormProperties {

		/** Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. If the Subnet is of type vSwitch, it also can not overlap with any gateway in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask. */
		ip_range: FormControl<string | null | undefined>,

		/**
		 * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,

		/**
		 * Type of Subnetwork
		 * Required
		 */
		type: FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>,

		/** ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch. */
		vswitch_id: FormControl<number | null | undefined>,
	}
	export function CreateNetworks_idActionsAdd_subnetPostPostBodyFormGroup() {
		return new FormGroup<Networks_idActionsAdd_subnetPostPostBodyFormProperties>({
			ip_range: new FormControl<string | null | undefined>(undefined),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworksGetByNameAndLabel_selectorReturnNetworksSubnetsType | null | undefined>(undefined, [Validators.required]),
			vswitch_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Networks_idActionsChange_ip_rangePostPostBody {

		/**
		 * The new prefix for the whole Network
		 * Required
		 */
		ip_range: string;
	}
	export interface Networks_idActionsChange_ip_rangePostPostBodyFormProperties {

		/**
		 * The new prefix for the whole Network
		 * Required
		 */
		ip_range: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActionsChange_ip_rangePostPostBodyFormGroup() {
		return new FormGroup<Networks_idActionsChange_ip_rangePostPostBodyFormProperties>({
			ip_range: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsChange_protectionPostPostBody {

		/** If true, prevents the Network from being deleted */
		delete?: boolean | null;
	}
	export interface Networks_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the Network from being deleted */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworks_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Networks_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Networks_idActionsDelete_routePostPostBody {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: string;

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: string;
	}
	export interface Networks_idActionsDelete_routePostPostBodyFormProperties {

		/**
		 * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.
		 * Required
		 */
		gateway: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActionsDelete_routePostPostBodyFormGroup() {
		return new FormGroup<Networks_idActionsDelete_routePostPostBodyFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActionsDelete_subnetPostPostBody {

		/**
		 * IP range of subnet to delete
		 * Required
		 */
		ip_range: string;
	}
	export interface Networks_idActionsDelete_subnetPostPostBodyFormProperties {

		/**
		 * IP range of subnet to delete
		 * Required
		 */
		ip_range: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActionsDelete_subnetPostPostBodyFormGroup() {
		return new FormGroup<Networks_idActionsDelete_subnetPostPostBodyFormProperties>({
			ip_range: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActions_action_idGetReturn {

		/** Required */
		action: Networks_idActions_action_idGetReturnAction;
	}
	export interface Networks_idActions_action_idGetReturnFormProperties {
	}
	export function CreateNetworks_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Networks_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Networks_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Networks_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Networks_idActions_action_idGetReturnActionResources: Array<Networks_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Networks_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateNetworks_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Networks_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Networks_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Networks_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Networks_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Networks_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworks_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Networks_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType { spread = 'spread' }

	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturn {
		meta?: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMeta;

		/** Required */
		Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnPlacement_groups: Array<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnPlacement_groups>;
	}
	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnFormProperties {
	}
	export function CreatePlacement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnFormGroup() {
		return new FormGroup<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnFormProperties>({
		});

	}

	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMeta {

		/** Required */
		pagination: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPagination;
	}
	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaFormProperties {
	}
	export function CreatePlacement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaFormGroup() {
		return new FormGroup<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaFormProperties>({
		});

	}

	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreatePlacement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPaginationFormGroup() {
		return new FormGroup<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnPlacement_groups {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Array of IDs of Servers that are part of this Placement Group
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnPlacement_groupsFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreatePlacement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnPlacement_groupsFormGroup() {
		return new FormGroup<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeReturnPlacement_groupsFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Placement_groupsPostPostBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/**
		 * Name of the PlacementGroup
		 * Required
		 */
		name: string;

		/**
		 * Define the Placement Group Type.
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface Placement_groupsPostPostBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the PlacementGroup
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Define the Placement Group Type.
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreatePlacement_groupsPostPostBodyFormGroup() {
		return new FormGroup<Placement_groupsPostPostBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Placement_groups_idGetReturn {

		/** Required */
		placement_group: Placement_groups_idGetReturnPlacement_group;
	}
	export interface Placement_groups_idGetReturnFormProperties {
	}
	export function CreatePlacement_groups_idGetReturnFormGroup() {
		return new FormGroup<Placement_groups_idGetReturnFormProperties>({
		});

	}

	export interface Placement_groups_idGetReturnPlacement_group {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Array of IDs of Servers that are part of this Placement Group
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface Placement_groups_idGetReturnPlacement_groupFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreatePlacement_groups_idGetReturnPlacement_groupFormGroup() {
		return new FormGroup<Placement_groups_idGetReturnPlacement_groupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Placement_groups_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New PlacementGroup name */
		name?: string | null;
	}
	export interface Placement_groups_idPutPutBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New PlacementGroup name */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlacement_groups_idPutPutBodyFormGroup() {
		return new FormGroup<Placement_groups_idPutPutBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Placement_groups_idPutReturn {

		/** Required */
		placement_group: Placement_groups_idPutReturnPlacement_group;
	}
	export interface Placement_groups_idPutReturnFormProperties {
	}
	export function CreatePlacement_groups_idPutReturnFormGroup() {
		return new FormGroup<Placement_groups_idPutReturnFormProperties>({
		});

	}

	export interface Placement_groups_idPutReturnPlacement_group {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Array of IDs of Servers that are part of this Placement Group
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface Placement_groups_idPutReturnPlacement_groupFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreatePlacement_groups_idPutReturnPlacement_groupFormGroup() {
		return new FormGroup<Placement_groups_idPutReturnPlacement_groupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturn {

		/** Required */
		pricing: PricingGetReturnPricing;
	}
	export interface PricingGetReturnFormProperties {
	}
	export function CreatePricingGetReturnFormGroup() {
		return new FormGroup<PricingGetReturnFormProperties>({
		});

	}

	export interface PricingGetReturnPricing {

		/**
		 * Currency the returned prices are expressed in, coded according to ISO 4217
		 * Required
		 */
		currency: string;

		/**
		 * The cost of one Floating IP per month
		 * Required
		 */
		floating_ip: PricingGetReturnPricingFloating_ip;

		/**
		 * Costs of Floating IPs types per Location and type
		 * Required
		 */
		PricingGetReturnPricingFloating_ips: Array<PricingGetReturnPricingFloating_ips>;

		/**
		 * The cost of Image per GB/month
		 * Required
		 */
		image: PricingGetReturnPricingImage;

		/**
		 * Costs of Load Balancer types per Location and type
		 * Required
		 */
		PricingGetReturnPricingLoad_balancer_types: Array<PricingGetReturnPricingLoad_balancer_types>;

		/**
		 * Costs of Primary IPs types per Location
		 * Required
		 */
		PricingGetReturnPricingPrimary_ips: Array<PricingGetReturnPricingPrimary_ips>;

		/**
		 * Will increase base Server costs by specific percentage
		 * Required
		 */
		server_backup: PricingGetReturnPricingServer_backup;

		/**
		 * Costs of Server types per Location and type
		 * Required
		 */
		PricingGetReturnPricingServer_types: Array<PricingGetReturnPricingServer_types>;

		/**
		 * The cost of additional traffic per TB
		 * Required
		 */
		traffic: PricingGetReturnPricingTraffic;

		/**
		 * The VAT rate used for calculating prices with VAT
		 * Required
		 */
		vat_rate: string;

		/**
		 * The cost of Volume per GB/month
		 * Required
		 */
		volume: PricingGetReturnPricingVolume;
	}
	export interface PricingGetReturnPricingFormProperties {

		/**
		 * Currency the returned prices are expressed in, coded according to ISO 4217
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * The VAT rate used for calculating prices with VAT
		 * Required
		 */
		vat_rate: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingFormGroup() {
		return new FormGroup<PricingGetReturnPricingFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vat_rate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingFloating_ip {

		/** Required */
		price_monthly: PricingGetReturnPricingFloating_ipPrice_monthly;
	}
	export interface PricingGetReturnPricingFloating_ipFormProperties {
	}
	export function CreatePricingGetReturnPricingFloating_ipFormGroup() {
		return new FormGroup<PricingGetReturnPricingFloating_ipFormProperties>({
		});

	}

	export interface PricingGetReturnPricingFloating_ipPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingFloating_ipPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingFloating_ipPrice_monthlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingFloating_ipPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingFloating_ips {

		/**
		 * Floating IP type costs per Location
		 * Required
		 */
		PricingGetReturnPricingFloating_ipsPrices: Array<PricingGetReturnPricingFloating_ipsPrices>;

		/**
		 * The type of the Floating IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface PricingGetReturnPricingFloating_ipsFormProperties {

		/**
		 * The type of the Floating IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreatePricingGetReturnPricingFloating_ipsFormGroup() {
		return new FormGroup<PricingGetReturnPricingFloating_ipsFormProperties>({
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingFloating_ipsPrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Monthly costs for a Floating IP type in this Location
		 * Required
		 */
		price_monthly: PricingGetReturnPricingFloating_ipsPricesPrice_monthly;
	}
	export interface PricingGetReturnPricingFloating_ipsPricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingFloating_ipsPricesFormGroup() {
		return new FormGroup<PricingGetReturnPricingFloating_ipsPricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingFloating_ipsPricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingFloating_ipsPricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingFloating_ipsPricesPrice_monthlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingFloating_ipsPricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingImage {

		/** Required */
		price_per_gb_month: PricingGetReturnPricingImagePrice_per_gb_month;
	}
	export interface PricingGetReturnPricingImageFormProperties {
	}
	export function CreatePricingGetReturnPricingImageFormGroup() {
		return new FormGroup<PricingGetReturnPricingImageFormProperties>({
		});

	}

	export interface PricingGetReturnPricingImagePrice_per_gb_month {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingImagePrice_per_gb_monthFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingImagePrice_per_gb_monthFormGroup() {
		return new FormGroup<PricingGetReturnPricingImagePrice_per_gb_monthFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingLoad_balancer_types {

		/**
		 * ID of the Load Balancer type the price is for
		 * Required
		 */
		id: number;

		/**
		 * Name of the Load Balancer type the price is for
		 * Required
		 */
		name: string;

		/**
		 * Load Balancer type costs per Location
		 * Required
		 */
		PricingGetReturnPricingLoad_balancer_typesPrices: Array<PricingGetReturnPricingLoad_balancer_typesPrices>;
	}
	export interface PricingGetReturnPricingLoad_balancer_typesFormProperties {

		/**
		 * ID of the Load Balancer type the price is for
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Name of the Load Balancer type the price is for
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingLoad_balancer_typesFormGroup() {
		return new FormGroup<PricingGetReturnPricingLoad_balancer_typesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingLoad_balancer_typesPrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Load Balancer type in this network zone
		 * Required
		 */
		price_hourly: PricingGetReturnPricingLoad_balancer_typesPricesPrice_hourly;

		/**
		 * Monthly costs for a Load Balancer type in this network zone
		 * Required
		 */
		price_monthly: PricingGetReturnPricingLoad_balancer_typesPricesPrice_monthly;
	}
	export interface PricingGetReturnPricingLoad_balancer_typesPricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingLoad_balancer_typesPricesFormGroup() {
		return new FormGroup<PricingGetReturnPricingLoad_balancer_typesPricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingLoad_balancer_typesPricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingLoad_balancer_typesPricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingLoad_balancer_typesPricesPrice_hourlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingLoad_balancer_typesPricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingLoad_balancer_typesPricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingLoad_balancer_typesPricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingLoad_balancer_typesPricesPrice_monthlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingLoad_balancer_typesPricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingPrimary_ips {

		/**
		 * Primary IP type costs per Location
		 * Required
		 */
		PricingGetReturnPricingPrimary_ipsPrices: Array<PricingGetReturnPricingPrimary_ipsPrices>;

		/**
		 * The type of the Primary IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface PricingGetReturnPricingPrimary_ipsFormProperties {

		/**
		 * The type of the Primary IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreatePricingGetReturnPricingPrimary_ipsFormGroup() {
		return new FormGroup<PricingGetReturnPricingPrimary_ipsFormProperties>({
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingPrimary_ipsPrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Primary IP type in this Location
		 * Required
		 */
		price_hourly: PricingGetReturnPricingPrimary_ipsPricesPrice_hourly;

		/**
		 * Monthly costs for a Primary IP type in this Location
		 * Required
		 */
		price_monthly: PricingGetReturnPricingPrimary_ipsPricesPrice_monthly;
	}
	export interface PricingGetReturnPricingPrimary_ipsPricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingPrimary_ipsPricesFormGroup() {
		return new FormGroup<PricingGetReturnPricingPrimary_ipsPricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingPrimary_ipsPricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingPrimary_ipsPricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingPrimary_ipsPricesPrice_hourlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingPrimary_ipsPricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingPrimary_ipsPricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingPrimary_ipsPricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingPrimary_ipsPricesPrice_monthlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingPrimary_ipsPricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingServer_backup {

		/**
		 * Percentage by how much the base price will increase
		 * Required
		 */
		percentage: string;
	}
	export interface PricingGetReturnPricingServer_backupFormProperties {

		/**
		 * Percentage by how much the base price will increase
		 * Required
		 */
		percentage: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingServer_backupFormGroup() {
		return new FormGroup<PricingGetReturnPricingServer_backupFormProperties>({
			percentage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingServer_types {

		/**
		 * ID of the Server type the price is for
		 * Required
		 */
		id: number;

		/**
		 * Name of the Server type the price is for
		 * Required
		 */
		name: string;

		/**
		 * Server type costs per Location
		 * Required
		 */
		PricingGetReturnPricingServer_typesPrices: Array<PricingGetReturnPricingServer_typesPrices>;
	}
	export interface PricingGetReturnPricingServer_typesFormProperties {

		/**
		 * ID of the Server type the price is for
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Name of the Server type the price is for
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingServer_typesFormGroup() {
		return new FormGroup<PricingGetReturnPricingServer_typesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingServer_typesPrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Server type in this Location
		 * Required
		 */
		price_hourly: PricingGetReturnPricingServer_typesPricesPrice_hourly;

		/**
		 * Monthly costs for a Server type in this Location
		 * Required
		 */
		price_monthly: PricingGetReturnPricingServer_typesPricesPrice_monthly;
	}
	export interface PricingGetReturnPricingServer_typesPricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingServer_typesPricesFormGroup() {
		return new FormGroup<PricingGetReturnPricingServer_typesPricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingServer_typesPricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingServer_typesPricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingServer_typesPricesPrice_hourlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingServer_typesPricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingServer_typesPricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingServer_typesPricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingServer_typesPricesPrice_monthlyFormGroup() {
		return new FormGroup<PricingGetReturnPricingServer_typesPricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingTraffic {

		/** Required */
		price_per_tb: PricingGetReturnPricingTrafficPrice_per_tb;
	}
	export interface PricingGetReturnPricingTrafficFormProperties {
	}
	export function CreatePricingGetReturnPricingTrafficFormGroup() {
		return new FormGroup<PricingGetReturnPricingTrafficFormProperties>({
		});

	}

	export interface PricingGetReturnPricingTrafficPrice_per_tb {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingTrafficPrice_per_tbFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingTrafficPrice_per_tbFormGroup() {
		return new FormGroup<PricingGetReturnPricingTrafficPrice_per_tbFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingGetReturnPricingVolume {

		/** Required */
		price_per_gb_month: PricingGetReturnPricingVolumePrice_per_gb_month;
	}
	export interface PricingGetReturnPricingVolumeFormProperties {
	}
	export function CreatePricingGetReturnPricingVolumeFormGroup() {
		return new FormGroup<PricingGetReturnPricingVolumeFormProperties>({
		});

	}

	export interface PricingGetReturnPricingVolumePrice_per_gb_month {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface PricingGetReturnPricingVolumePrice_per_gb_monthFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreatePricingGetReturnPricingVolumePrice_per_gb_monthFormGroup() {
		return new FormGroup<PricingGetReturnPricingVolumePrice_per_gb_monthFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturn {
		meta?: Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMeta;

		/** Required */
		Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ips: Array<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ips>;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnFormProperties {
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnFormProperties>({
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMeta {

		/** Required */
		pagination: Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaPagination;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaFormProperties {
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaFormProperties>({
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaPaginationFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ips {

		/**
		 * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		assignee_id: number;

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType;

		/**
		 * Delete this Primary IP when the resource it is assigned to is deleted
		 * Required
		 */
		auto_delete: boolean;

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: boolean;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Datacenter this Primary IP is located at
		 * Required
		 */
		datacenter: Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenter;

		/**
		 * Array of reverse DNS entries
		 * Required
		 */
		Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDns_ptr: Array<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDns_ptr>;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * IP address
		 * Required
		 */
		ip: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsProtection;

		/**
		 * Type of the Primary IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsFormProperties {

		/**
		 * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		assignee_id: FormControl<number | null | undefined>,

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,

		/**
		 * Delete this Primary IP when the resource it is assigned to is deleted
		 * Required
		 */
		auto_delete: FormControl<boolean | null | undefined>,

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Primary IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsFormProperties>({
			assignee_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assignee_type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined, [Validators.required]),
			auto_delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterServer_types;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterLocationFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterServer_typesFormProperties {
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterServer_typesFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDatacenterServer_typesFormProperties>({
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: string;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDns_ptrFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsDns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreatePrimary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsProtectionFormGroup() {
		return new FormGroup<Primary_ipsGetByNameAndLabel_selectorAndIpAndSortReturnPrimary_ipsProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ipsPostPostBody {

		/** ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned. */
		assignee_id?: number | null;

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType;

		/** Delete the Primary IP when the Server it is assigned to is deleted. If omitted defaults to `false`. */
		auto_delete?: boolean | null;

		/** ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed. */
		datacenter?: string | null;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** Required */
		name: string;

		/**
		 * Primary IP type
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Primary_ipsPostPostBodyFormProperties {

		/** ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned. */
		assignee_id: FormControl<number | null | undefined>,

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,

		/** Delete the Primary IP when the Server it is assigned to is deleted. If omitted defaults to `false`. */
		auto_delete: FormControl<boolean | null | undefined>,

		/** ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed. */
		datacenter: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Primary IP type
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreatePrimary_ipsPostPostBodyFormGroup() {
		return new FormGroup<Primary_ipsPostPostBodyFormProperties>({
			assignee_id: new FormControl<number | null | undefined>(undefined),
			assignee_type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined, [Validators.required]),
			auto_delete: new FormControl<boolean | null | undefined>(undefined),
			datacenter: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idGetReturn {

		/** Required */
		primary_ip: Primary_ips_idGetReturnPrimary_ip;
	}
	export interface Primary_ips_idGetReturnFormProperties {
	}
	export function CreatePrimary_ips_idGetReturnFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnFormProperties>({
		});

	}

	export interface Primary_ips_idGetReturnPrimary_ip {

		/**
		 * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		assignee_id: number;

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType;

		/**
		 * Delete this Primary IP when the resource it is assigned to is deleted
		 * Required
		 */
		auto_delete: boolean;

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: boolean;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Datacenter this Primary IP is located at
		 * Required
		 */
		datacenter: Primary_ips_idGetReturnPrimary_ipDatacenter;

		/**
		 * Array of reverse DNS entries
		 * Required
		 */
		Primary_ips_idGetReturnPrimary_ipDns_ptr: Array<Primary_ips_idGetReturnPrimary_ipDns_ptr>;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * IP address
		 * Required
		 */
		ip: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Primary_ips_idGetReturnPrimary_ipProtection;

		/**
		 * Type of the Primary IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Primary_ips_idGetReturnPrimary_ipFormProperties {

		/**
		 * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		assignee_id: FormControl<number | null | undefined>,

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,

		/**
		 * Delete this Primary IP when the resource it is assigned to is deleted
		 * Required
		 */
		auto_delete: FormControl<boolean | null | undefined>,

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Primary IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreatePrimary_ips_idGetReturnPrimary_ipFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnPrimary_ipFormProperties>({
			assignee_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assignee_type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined, [Validators.required]),
			auto_delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idGetReturnPrimary_ipDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: Primary_ips_idGetReturnPrimary_ipDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: Primary_ips_idGetReturnPrimary_ipDatacenterServer_types;
	}
	export interface Primary_ips_idGetReturnPrimary_ipDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idGetReturnPrimary_ipDatacenterFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnPrimary_ipDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idGetReturnPrimary_ipDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Primary_ips_idGetReturnPrimary_ipDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idGetReturnPrimary_ipDatacenterLocationFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnPrimary_ipDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idGetReturnPrimary_ipDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface Primary_ips_idGetReturnPrimary_ipDatacenterServer_typesFormProperties {
	}
	export function CreatePrimary_ips_idGetReturnPrimary_ipDatacenterServer_typesFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnPrimary_ipDatacenterServer_typesFormProperties>({
		});

	}

	export interface Primary_ips_idGetReturnPrimary_ipDns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: string;
	}
	export interface Primary_ips_idGetReturnPrimary_ipDns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idGetReturnPrimary_ipDns_ptrFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnPrimary_ipDns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idGetReturnPrimary_ipProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Primary_ips_idGetReturnPrimary_ipProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreatePrimary_ips_idGetReturnPrimary_ipProtectionFormGroup() {
		return new FormGroup<Primary_ips_idGetReturnPrimary_ipProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idPutPutBody {

		/** Delete this Primary IP when the resource it is assigned to is deleted */
		auto_delete?: boolean | null;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New unique name to set */
		name?: string | null;
	}
	export interface Primary_ips_idPutPutBodyFormProperties {

		/** Delete this Primary IP when the resource it is assigned to is deleted */
		auto_delete: FormControl<boolean | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New unique name to set */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idPutPutBodyFormGroup() {
		return new FormGroup<Primary_ips_idPutPutBodyFormProperties>({
			auto_delete: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Primary_ips_idPutReturn {

		/** Required */
		primary_ip: Primary_ips_idPutReturnPrimary_ip;
	}
	export interface Primary_ips_idPutReturnFormProperties {
	}
	export function CreatePrimary_ips_idPutReturnFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnFormProperties>({
		});

	}

	export interface Primary_ips_idPutReturnPrimary_ip {

		/**
		 * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		assignee_id: number;

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType;

		/**
		 * Delete this Primary IP when the resource it is assigned to is deleted
		 * Required
		 */
		auto_delete: boolean;

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: boolean;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Datacenter this Primary IP is located at
		 * Required
		 */
		datacenter: Primary_ips_idPutReturnPrimary_ipDatacenter;

		/**
		 * Array of reverse DNS entries
		 * Required
		 */
		Primary_ips_idPutReturnPrimary_ipDns_ptr: Array<Primary_ips_idPutReturnPrimary_ipDns_ptr>;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * IP address
		 * Required
		 */
		ip: string;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Primary_ips_idPutReturnPrimary_ipProtection;

		/**
		 * Type of the Primary IP
		 * Required
		 */
		type: Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType;
	}
	export interface Primary_ips_idPutReturnPrimary_ipFormProperties {

		/**
		 * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
		 * Required
		 */
		assignee_id: FormControl<number | null | undefined>,

		/**
		 * Resource type the Primary IP can be assigned to
		 * Required
		 */
		assignee_type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,

		/**
		 * Delete this Primary IP when the resource it is assigned to is deleted
		 * Required
		 */
		auto_delete: FormControl<boolean | null | undefined>,

		/**
		 * Whether the IP is blocked
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Primary IP
		 * Required
		 */
		type: FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>,
	}
	export function CreatePrimary_ips_idPutReturnPrimary_ipFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnPrimary_ipFormProperties>({
			assignee_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assignee_type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined, [Validators.required]),
			auto_delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Floating_ipsGetByNameAndLabel_selectorAndSortReturnFloating_ipsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idPutReturnPrimary_ipDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: Primary_ips_idPutReturnPrimary_ipDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: Primary_ips_idPutReturnPrimary_ipDatacenterServer_types;
	}
	export interface Primary_ips_idPutReturnPrimary_ipDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idPutReturnPrimary_ipDatacenterFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnPrimary_ipDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idPutReturnPrimary_ipDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Primary_ips_idPutReturnPrimary_ipDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idPutReturnPrimary_ipDatacenterLocationFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnPrimary_ipDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idPutReturnPrimary_ipDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface Primary_ips_idPutReturnPrimary_ipDatacenterServer_typesFormProperties {
	}
	export function CreatePrimary_ips_idPutReturnPrimary_ipDatacenterServer_typesFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnPrimary_ipDatacenterServer_typesFormProperties>({
		});

	}

	export interface Primary_ips_idPutReturnPrimary_ipDns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: string;
	}
	export interface Primary_ips_idPutReturnPrimary_ipDns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv4 or IPv6 address
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idPutReturnPrimary_ipDns_ptrFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnPrimary_ipDns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idPutReturnPrimary_ipProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Primary_ips_idPutReturnPrimary_ipProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreatePrimary_ips_idPutReturnPrimary_ipProtectionFormGroup() {
		return new FormGroup<Primary_ips_idPutReturnPrimary_ipProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idActionsAssignPostPostBody {

		/**
		 * ID of a resource of type `assignee_type`
		 * Required
		 */
		assignee_id: number;

		/**
		 * Type of resource assigning the Primary IP to
		 * Required
		 */
		assignee_type: FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType;
	}
	export interface Primary_ips_idActionsAssignPostPostBodyFormProperties {

		/**
		 * ID of a resource of type `assignee_type`
		 * Required
		 */
		assignee_id: FormControl<number | null | undefined>,

		/**
		 * Type of resource assigning the Primary IP to
		 * Required
		 */
		assignee_type: FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>,
	}
	export function CreatePrimary_ips_idActionsAssignPostPostBodyFormGroup() {
		return new FormGroup<Primary_ips_idActionsAssignPostPostBodyFormProperties>({
			assignee_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assignee_type: new FormControl<FirewallsGetBySortAndNameAndLabel_selectorReturnFirewallsApplied_toApplied_to_resourcesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idActionsChange_dns_ptrPostPostBody {

		/**
		 * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
		 * Required
		 */
		dns_ptr: string;

		/**
		 * IP address for which to set the reverse DNS entry
		 * Required
		 */
		ip: string;
	}
	export interface Primary_ips_idActionsChange_dns_ptrPostPostBodyFormProperties {

		/**
		 * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * IP address for which to set the reverse DNS entry
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreatePrimary_ips_idActionsChange_dns_ptrPostPostBodyFormGroup() {
		return new FormGroup<Primary_ips_idActionsChange_dns_ptrPostPostBodyFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Primary_ips_idActionsChange_protectionPostPostBody {

		/** If true, prevents the Primary IP from being deleted */
		delete?: boolean | null;
	}
	export interface Primary_ips_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the Primary IP from being deleted */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreatePrimary_ips_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Primary_ips_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Server_typesGetByNameReturn {

		/** Required */
		Server_typesGetByNameReturnServer_types: Array<Server_typesGetByNameReturnServer_types>;
	}
	export interface Server_typesGetByNameReturnFormProperties {
	}
	export function CreateServer_typesGetByNameReturnFormGroup() {
		return new FormGroup<Server_typesGetByNameReturnFormProperties>({
		});

	}

	export interface Server_typesGetByNameReturnServer_types {

		/**
		 * Type of cpu architecture
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: number;

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: Server_typesGetByNameReturnServer_typesCpu_type;

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: boolean;

		/**
		 * Description of the Server type
		 * Required
		 */
		description: string;

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: number;

		/**
		 * ID of the Server type
		 * Required
		 */
		id: number;

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: number;

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different Locations
		 * Required
		 */
		Server_typesGetByNameReturnServer_typesPrices: Array<Server_typesGetByNameReturnServer_typesPrices>;

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: Server_typesGetByNameReturnServer_typesStorage_type;
	}
	export interface Server_typesGetByNameReturnServer_typesFormProperties {

		/**
		 * Type of cpu architecture
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: FormControl<number | null | undefined>,

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>,

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/**
		 * Description of the Server type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * ID of the Server type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>,
	}
	export function CreateServer_typesGetByNameReturnServer_typesFormGroup() {
		return new FormGroup<Server_typesGetByNameReturnServer_typesFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			cores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cpu_type: new FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storage_type: new FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Server_typesGetByNameReturnServer_typesCpu_type { shared = 'shared', dedicated = 'dedicated' }

	export interface Server_typesGetByNameReturnServer_typesPrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Server type in this Location
		 * Required
		 */
		price_hourly: Server_typesGetByNameReturnServer_typesPricesPrice_hourly;

		/**
		 * Monthly costs for a Server type in this Location
		 * Required
		 */
		price_monthly: Server_typesGetByNameReturnServer_typesPricesPrice_monthly;
	}
	export interface Server_typesGetByNameReturnServer_typesPricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServer_typesGetByNameReturnServer_typesPricesFormGroup() {
		return new FormGroup<Server_typesGetByNameReturnServer_typesPricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Server_typesGetByNameReturnServer_typesPricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Server_typesGetByNameReturnServer_typesPricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServer_typesGetByNameReturnServer_typesPricesPrice_hourlyFormGroup() {
		return new FormGroup<Server_typesGetByNameReturnServer_typesPricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Server_typesGetByNameReturnServer_typesPricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Server_typesGetByNameReturnServer_typesPricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServer_typesGetByNameReturnServer_typesPricesPrice_monthlyFormGroup() {
		return new FormGroup<Server_typesGetByNameReturnServer_typesPricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Server_typesGetByNameReturnServer_typesStorage_type { local = 'local', network = 'network' }

	export interface Server_types_idGetReturn {

		/** Required */
		server_type: Server_types_idGetReturnServer_type;
	}
	export interface Server_types_idGetReturnFormProperties {
	}
	export function CreateServer_types_idGetReturnFormGroup() {
		return new FormGroup<Server_types_idGetReturnFormProperties>({
		});

	}

	export interface Server_types_idGetReturnServer_type {

		/**
		 * Type of cpu architecture
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: number;

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: Server_typesGetByNameReturnServer_typesCpu_type;

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: boolean;

		/**
		 * Description of the Server type
		 * Required
		 */
		description: string;

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: number;

		/**
		 * ID of the Server type
		 * Required
		 */
		id: number;

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: number;

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different Locations
		 * Required
		 */
		Server_types_idGetReturnServer_typePrices: Array<Server_types_idGetReturnServer_typePrices>;

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: Server_typesGetByNameReturnServer_typesStorage_type;
	}
	export interface Server_types_idGetReturnServer_typeFormProperties {

		/**
		 * Type of cpu architecture
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: FormControl<number | null | undefined>,

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>,

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/**
		 * Description of the Server type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * ID of the Server type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>,
	}
	export function CreateServer_types_idGetReturnServer_typeFormGroup() {
		return new FormGroup<Server_types_idGetReturnServer_typeFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			cores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cpu_type: new FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storage_type: new FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Server_types_idGetReturnServer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Server type in this Location
		 * Required
		 */
		price_hourly: Server_types_idGetReturnServer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Server type in this Location
		 * Required
		 */
		price_monthly: Server_types_idGetReturnServer_typePricesPrice_monthly;
	}
	export interface Server_types_idGetReturnServer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServer_types_idGetReturnServer_typePricesFormGroup() {
		return new FormGroup<Server_types_idGetReturnServer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Server_types_idGetReturnServer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Server_types_idGetReturnServer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServer_types_idGetReturnServer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Server_types_idGetReturnServer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Server_types_idGetReturnServer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Server_types_idGetReturnServer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServer_types_idGetReturnServer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Server_types_idGetReturnServer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServersGetByNameAndLabel_selectorAndSortAndStatusStatus { initializing = 'initializing', starting = 'starting', running = 'running', stopping = 'stopping', off = 'off', deleting = 'deleting', rebuilding = 'rebuilding', migrating = 'migrating', unknown = 'unknown' }

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturn {
		meta?: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMeta;

		/** Required */
		ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServers: Array<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServers>;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnFormProperties {
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnFormProperties>({
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMeta {

		/** Required */
		pagination: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaPagination;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaFormProperties {
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServers {

		/**
		 * Time window (UTC) in which the backup will run, or null if the backups are not enabled
		 * Required
		 */
		backup_window: string;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Datacenter this Resource is located at
		 * Required
		 */
		datacenter: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenter;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		image: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImage;

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: number;

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: number;

		/**
		 * ISO Image that is attached to this Server. Null if no ISO is attached.
		 * Required
		 */
		iso: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersIso;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };
		load_balancers?: Array<number>;

		/**
		 * True if Server has been locked and is not available to user
		 * Required
		 */
		locked: boolean;

		/**
		 * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: string;

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: number;
		placement_group?: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPlacement_group;

		/**
		 * Size of the primary Disk
		 * Required
		 */
		primary_disk_size: number;

		/**
		 * Private networks information
		 * Required
		 */
		ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPrivate_net: Array<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPrivate_net>;

		/**
		 * Protection configuration for the Server
		 * Required
		 */
		protection: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersProtection;

		/**
		 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
		 * Required
		 */
		public_net: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_net;

		/**
		 * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
		 * Required
		 */
		rescue_enabled: boolean;

		/**
		 * Type of Server - determines how much ram, disk and cpu a Server has
		 * Required
		 */
		server_type: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_type;

		/**
		 * Status of the Server
		 * Required
		 */
		status: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus;

		/** IDs of Volumes assigned to this Server */
		volumes?: Array<number>;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersFormProperties {

		/**
		 * Time window (UTC) in which the backup will run, or null if the backups are not enabled
		 * Required
		 */
		backup_window: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: FormControl<number | null | undefined>,

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * True if Server has been locked and is not available to user
		 * Required
		 */
		locked: FormControl<boolean | null | undefined>,

		/**
		 * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: FormControl<number | null | undefined>,

		/**
		 * Size of the primary Disk
		 * Required
		 */
		primary_disk_size: FormControl<number | null | undefined>,

		/**
		 * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
		 * Required
		 */
		rescue_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Status of the Server
		 * Required
		 */
		status: FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersFormProperties>({
			backup_window: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			included_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ingoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outgoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			primary_disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rescue_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterServer_types;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterLocationFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterServer_typesFormProperties {
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterServer_typesFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersDatacenterServer_typesFormProperties>({
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImage {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: number;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Information about the Server the Image was created from
		 * Required
		 */
		created_from: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageCreated_from;

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: string;

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Image
		 * Required
		 */
		description: string;

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: number;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: string;

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor;

		/**
		 * Operating system version
		 * Required
		 */
		os_version: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageProtection;

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy?: boolean | null;

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus;

		/**
		 * Type of the Image
		 * Required
		 */
		type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageFormProperties {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Image
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: FormControl<number | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>,

		/**
		 * Operating system version
		 * Required
		 */
		os_version: FormControl<string | null | undefined>,

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>,

		/**
		 * Type of the Image
		 * Required
		 */
		type: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageFormProperties>({
			bound_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os_flavor: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>(undefined, [Validators.required]),
			os_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rapid_deploy: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageCreated_from {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: number;

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageCreated_fromFormProperties {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageCreated_fromFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageCreated_fromFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageProtectionFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersImageProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersIso {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the ISO
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: string;

		/**
		 * Type of the ISO
		 * Required
		 */
		type: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersIsoFormProperties {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the ISO
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the ISO
		 * Required
		 */
		type: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersIsoFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersIsoFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPlacement_group {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Array of IDs of Servers that are part of this Placement Group
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPlacement_groupFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPlacement_groupFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPlacement_groupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPrivate_net {
		alias_ips?: Array<string>;
		ip?: string | null;
		mac_address?: string | null;
		network?: number | null;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPrivate_netFormProperties {
		ip: FormControl<string | null | undefined>,
		mac_address: FormControl<string | null | undefined>,
		network: FormControl<number | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPrivate_netFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPrivate_netFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			mac_address: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersProtection {

		/**
		 * If true, prevents the Server from being deleted
		 * Required
		 */
		delete: boolean;

		/**
		 * If true, prevents the Server from being rebuilt
		 * Required
		 */
		rebuild: boolean;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersProtectionFormProperties {

		/**
		 * If true, prevents the Server from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,

		/**
		 * If true, prevents the Server from being rebuilt
		 * Required
		 */
		rebuild: FormControl<boolean | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersProtectionFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rebuild: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_net {

		/** Firewalls applied to the public network interface of this Server */
		ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewalls?: Array<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewalls>;

		/**
		 * IDs of Floating IPs assigned to this Server
		 * Required
		 */
		floating_ips: Array<number>;

		/**
		 * IP address (v4) and its reverse DNS entry of this Server
		 * Required
		 */
		ipv4: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv4;

		/**
		 * IPv6 network assigned to this Server and its reverse DNS entry
		 * Required
		 */
		ipv6: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFormProperties {
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFormProperties>({
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewalls {

		/** ID of the Resource */
		id?: number | null;

		/** Status of the Firewall on the Server */
		status?: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsFormProperties {

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/** Status of the Firewall on the Server */
		status: FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null | undefined>(undefined),
		});

	}

	export enum ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus { applied = 'applied', pending = 'pending' }

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv4 {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: boolean;

		/**
		 * Reverse DNS PTR entry for the IPv4 addresses of this Server
		 * Required
		 */
		dns_ptr: string;

		/** ID of the Resource */
		id?: number | null;

		/**
		 * IP address (v4) of this Server
		 * Required
		 */
		ip: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv4FormProperties {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Reverse DNS PTR entry for the IPv4 addresses of this Server
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address (v4) of this Server
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv4FormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv4FormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6 {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: boolean;

		/**
		 * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
		 * Required
		 */
		ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6Dns_ptr: Array<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6Dns_ptr>;

		/** ID of the Resource */
		id?: number | null;

		/**
		 * IP address (v6) of this Server
		 * Required
		 */
		ip: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6FormProperties {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address (v6) of this Server
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6FormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6FormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6Dns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv6 address of this Server for which the reverse DNS entry has been set up
		 * Required
		 */
		ip: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6Dns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv6 address of this Server for which the reverse DNS entry has been set up
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6Dns_ptrFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netIpv6Dns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_type {

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: number;

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: Server_typesGetByNameReturnServer_typesCpu_type;

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: boolean;

		/**
		 * Description of the Server type
		 * Required
		 */
		description: string;

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: number;

		/**
		 * ID of the Server type
		 * Required
		 */
		id: number;

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: number;

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different Locations
		 * Required
		 */
		ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePrices: Array<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePrices>;

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: Server_typesGetByNameReturnServer_typesStorage_type;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typeFormProperties {

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: FormControl<number | null | undefined>,

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>,

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/**
		 * Description of the Server type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * ID of the Server type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typeFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typeFormProperties>({
			cores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cpu_type: new FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storage_type: new FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Server type in this Location
		 * Required
		 */
		price_hourly: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Server type in this Location
		 * Required
		 */
		price_monthly: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_monthly;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersServer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus { running = 'running', initializing = 'initializing', starting = 'starting', stopping = 'stopping', off = 'off', deleting = 'deleting', migrating = 'migrating', rebuilding = 'rebuilding', unknown = 'unknown' }

	export interface ServersPostPostBody {

		/** Auto-mount Volumes after attach */
		automount?: boolean | null;

		/** ID or name of Datacenter to create Server in (must not be used together with location) */
		datacenter?: string | null;

		/** Firewalls which should be applied on the Server's public network interface at creation time */
		ServersPostPostBodyFirewalls?: Array<ServersPostPostBodyFirewalls>;

		/**
		 * ID or name of the Image the Server is created from
		 * Required
		 */
		image: string;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** ID or name of Location to create Server in (must not be used together with datacenter) */
		location?: string | null;

		/**
		 * Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: string;

		/** Network IDs which should be attached to the Server private network interface at the creation time */
		networks?: Array<number>;

		/** ID of the Placement Group the server should be in */
		placement_group?: number | null;

		/** Public Network options */
		public_net?: ServersPostPostBodyPublic_net;

		/**
		 * ID or name of the Server type this Server should be created with
		 * Required
		 */
		server_type: string;

		/** SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time */
		ssh_keys?: Array<string>;

		/** Start Server right after creation. Defaults to true. */
		start_after_create?: boolean | null;

		/** Cloud-Init user data to use during Server creation. This field is limited to 32KiB. */
		user_data?: string | null;

		/** Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location. */
		volumes?: Array<number>;
	}
	export interface ServersPostPostBodyFormProperties {

		/** Auto-mount Volumes after attach */
		automount: FormControl<boolean | null | undefined>,

		/** ID or name of Datacenter to create Server in (must not be used together with location) */
		datacenter: FormControl<string | null | undefined>,

		/**
		 * ID or name of the Image the Server is created from
		 * Required
		 */
		image: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** ID or name of Location to create Server in (must not be used together with datacenter) */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** ID of the Placement Group the server should be in */
		placement_group: FormControl<number | null | undefined>,

		/**
		 * ID or name of the Server type this Server should be created with
		 * Required
		 */
		server_type: FormControl<string | null | undefined>,

		/** Start Server right after creation. Defaults to true. */
		start_after_create: FormControl<boolean | null | undefined>,

		/** Cloud-Init user data to use during Server creation. This field is limited to 32KiB. */
		user_data: FormControl<string | null | undefined>,
	}
	export function CreateServersPostPostBodyFormGroup() {
		return new FormGroup<ServersPostPostBodyFormProperties>({
			automount: new FormControl<boolean | null | undefined>(undefined),
			datacenter: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			placement_group: new FormControl<number | null | undefined>(undefined),
			server_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_after_create: new FormControl<boolean | null | undefined>(undefined),
			user_data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServersPostPostBodyFirewalls {

		/** ID of the Firewall */
		firewall?: number | null;
	}
	export interface ServersPostPostBodyFirewallsFormProperties {

		/** ID of the Firewall */
		firewall: FormControl<number | null | undefined>,
	}
	export function CreateServersPostPostBodyFirewallsFormGroup() {
		return new FormGroup<ServersPostPostBodyFirewallsFormProperties>({
			firewall: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServersPostPostBodyPublic_net {

		/** Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached. Defaults to true. */
		enable_ipv4?: boolean | null;

		/** Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached. Defaults to true. */
		enable_ipv6?: boolean | null;

		/** ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created. */
		ipv4?: number | null;

		/** ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created. */
		ipv6?: number | null;
	}
	export interface ServersPostPostBodyPublic_netFormProperties {

		/** Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached. Defaults to true. */
		enable_ipv4: FormControl<boolean | null | undefined>,

		/** Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached. Defaults to true. */
		enable_ipv6: FormControl<boolean | null | undefined>,

		/** ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created. */
		ipv4: FormControl<number | null | undefined>,

		/** ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created. */
		ipv6: FormControl<number | null | undefined>,
	}
	export function CreateServersPostPostBodyPublic_netFormGroup() {
		return new FormGroup<ServersPostPostBodyPublic_netFormProperties>({
			enable_ipv4: new FormControl<boolean | null | undefined>(undefined),
			enable_ipv6: new FormControl<boolean | null | undefined>(undefined),
			ipv4: new FormControl<number | null | undefined>(undefined),
			ipv6: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Servers_idDeleteReturn {
		action?: Servers_idDeleteReturnAction;
	}
	export interface Servers_idDeleteReturnFormProperties {
	}
	export function CreateServers_idDeleteReturnFormGroup() {
		return new FormGroup<Servers_idDeleteReturnFormProperties>({
		});

	}

	export interface Servers_idDeleteReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Servers_idDeleteReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Servers_idDeleteReturnActionResources: Array<Servers_idDeleteReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Servers_idDeleteReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateServers_idDeleteReturnActionFormGroup() {
		return new FormGroup<Servers_idDeleteReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idDeleteReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Servers_idDeleteReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateServers_idDeleteReturnActionErrorFormGroup() {
		return new FormGroup<Servers_idDeleteReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idDeleteReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Servers_idDeleteReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServers_idDeleteReturnActionResourcesFormGroup() {
		return new FormGroup<Servers_idDeleteReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturn {
		server?: Servers_idGetReturnServer;
	}
	export interface Servers_idGetReturnFormProperties {
	}
	export function CreateServers_idGetReturnFormGroup() {
		return new FormGroup<Servers_idGetReturnFormProperties>({
		});

	}

	export interface Servers_idGetReturnServer {

		/**
		 * Time window (UTC) in which the backup will run, or null if the backups are not enabled
		 * Required
		 */
		backup_window: string;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Datacenter this Resource is located at
		 * Required
		 */
		datacenter: Servers_idGetReturnServerDatacenter;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		image: Servers_idGetReturnServerImage;

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: number;

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: number;

		/**
		 * ISO Image that is attached to this Server. Null if no ISO is attached.
		 * Required
		 */
		iso: Servers_idGetReturnServerIso;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };
		load_balancers?: Array<number>;

		/**
		 * True if Server has been locked and is not available to user
		 * Required
		 */
		locked: boolean;

		/**
		 * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: string;

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: number;
		placement_group?: Servers_idGetReturnServerPlacement_group;

		/**
		 * Size of the primary Disk
		 * Required
		 */
		primary_disk_size: number;

		/**
		 * Private networks information
		 * Required
		 */
		Servers_idGetReturnServerPrivate_net: Array<Servers_idGetReturnServerPrivate_net>;

		/**
		 * Protection configuration for the Server
		 * Required
		 */
		protection: Servers_idGetReturnServerProtection;

		/**
		 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
		 * Required
		 */
		public_net: Servers_idGetReturnServerPublic_net;

		/**
		 * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
		 * Required
		 */
		rescue_enabled: boolean;

		/**
		 * Type of Server - determines how much ram, disk and cpu a Server has
		 * Required
		 */
		server_type: Servers_idGetReturnServerServer_type;

		/**
		 * Status of the Server
		 * Required
		 */
		status: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus;

		/** IDs of Volumes assigned to this Server */
		volumes?: Array<number>;
	}
	export interface Servers_idGetReturnServerFormProperties {

		/**
		 * Time window (UTC) in which the backup will run, or null if the backups are not enabled
		 * Required
		 */
		backup_window: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: FormControl<number | null | undefined>,

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * True if Server has been locked and is not available to user
		 * Required
		 */
		locked: FormControl<boolean | null | undefined>,

		/**
		 * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: FormControl<number | null | undefined>,

		/**
		 * Size of the primary Disk
		 * Required
		 */
		primary_disk_size: FormControl<number | null | undefined>,

		/**
		 * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
		 * Required
		 */
		rescue_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Status of the Server
		 * Required
		 */
		status: FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus | null | undefined>,
	}
	export function CreateServers_idGetReturnServerFormGroup() {
		return new FormGroup<Servers_idGetReturnServerFormProperties>({
			backup_window: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			included_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ingoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outgoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			primary_disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rescue_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: Servers_idGetReturnServerDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: Servers_idGetReturnServerDatacenterServer_types;
	}
	export interface Servers_idGetReturnServerDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerDatacenterFormGroup() {
		return new FormGroup<Servers_idGetReturnServerDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Servers_idGetReturnServerDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerDatacenterLocationFormGroup() {
		return new FormGroup<Servers_idGetReturnServerDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface Servers_idGetReturnServerDatacenterServer_typesFormProperties {
	}
	export function CreateServers_idGetReturnServerDatacenterServer_typesFormGroup() {
		return new FormGroup<Servers_idGetReturnServerDatacenterServer_typesFormProperties>({
		});

	}

	export interface Servers_idGetReturnServerImage {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: number;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Information about the Server the Image was created from
		 * Required
		 */
		created_from: Servers_idGetReturnServerImageCreated_from;

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: string;

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Image
		 * Required
		 */
		description: string;

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: number;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: string;

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor;

		/**
		 * Operating system version
		 * Required
		 */
		os_version: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Servers_idGetReturnServerImageProtection;

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy?: boolean | null;

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus;

		/**
		 * Type of the Image
		 * Required
		 */
		type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType;
	}
	export interface Servers_idGetReturnServerImageFormProperties {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Image
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: FormControl<number | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>,

		/**
		 * Operating system version
		 * Required
		 */
		os_version: FormControl<string | null | undefined>,

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>,

		/**
		 * Type of the Image
		 * Required
		 */
		type: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>,
	}
	export function CreateServers_idGetReturnServerImageFormGroup() {
		return new FormGroup<Servers_idGetReturnServerImageFormProperties>({
			bound_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os_flavor: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>(undefined, [Validators.required]),
			os_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rapid_deploy: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerImageCreated_from {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: number;

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: string;
	}
	export interface Servers_idGetReturnServerImageCreated_fromFormProperties {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerImageCreated_fromFormGroup() {
		return new FormGroup<Servers_idGetReturnServerImageCreated_fromFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerImageProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Servers_idGetReturnServerImageProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateServers_idGetReturnServerImageProtectionFormGroup() {
		return new FormGroup<Servers_idGetReturnServerImageProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerIso {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the ISO
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: string;

		/**
		 * Type of the ISO
		 * Required
		 */
		type: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType;
	}
	export interface Servers_idGetReturnServerIsoFormProperties {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the ISO
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the ISO
		 * Required
		 */
		type: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>,
	}
	export function CreateServers_idGetReturnServerIsoFormGroup() {
		return new FormGroup<Servers_idGetReturnServerIsoFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerPlacement_group {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Array of IDs of Servers that are part of this Placement Group
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface Servers_idGetReturnServerPlacement_groupFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateServers_idGetReturnServerPlacement_groupFormGroup() {
		return new FormGroup<Servers_idGetReturnServerPlacement_groupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerPrivate_net {
		alias_ips?: Array<string>;
		ip?: string | null;
		mac_address?: string | null;
		network?: number | null;
	}
	export interface Servers_idGetReturnServerPrivate_netFormProperties {
		ip: FormControl<string | null | undefined>,
		mac_address: FormControl<string | null | undefined>,
		network: FormControl<number | null | undefined>,
	}
	export function CreateServers_idGetReturnServerPrivate_netFormGroup() {
		return new FormGroup<Servers_idGetReturnServerPrivate_netFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			mac_address: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Servers_idGetReturnServerProtection {

		/**
		 * If true, prevents the Server from being deleted
		 * Required
		 */
		delete: boolean;

		/**
		 * If true, prevents the Server from being rebuilt
		 * Required
		 */
		rebuild: boolean;
	}
	export interface Servers_idGetReturnServerProtectionFormProperties {

		/**
		 * If true, prevents the Server from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,

		/**
		 * If true, prevents the Server from being rebuilt
		 * Required
		 */
		rebuild: FormControl<boolean | null | undefined>,
	}
	export function CreateServers_idGetReturnServerProtectionFormGroup() {
		return new FormGroup<Servers_idGetReturnServerProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rebuild: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerPublic_net {

		/** Firewalls applied to the public network interface of this Server */
		Servers_idGetReturnServerPublic_netFirewalls?: Array<Servers_idGetReturnServerPublic_netFirewalls>;

		/**
		 * IDs of Floating IPs assigned to this Server
		 * Required
		 */
		floating_ips: Array<number>;

		/**
		 * IP address (v4) and its reverse DNS entry of this Server
		 * Required
		 */
		ipv4: Servers_idGetReturnServerPublic_netIpv4;

		/**
		 * IPv6 network assigned to this Server and its reverse DNS entry
		 * Required
		 */
		ipv6: Servers_idGetReturnServerPublic_netIpv6;
	}
	export interface Servers_idGetReturnServerPublic_netFormProperties {
	}
	export function CreateServers_idGetReturnServerPublic_netFormGroup() {
		return new FormGroup<Servers_idGetReturnServerPublic_netFormProperties>({
		});

	}

	export interface Servers_idGetReturnServerPublic_netFirewalls {

		/** ID of the Resource */
		id?: number | null;

		/** Status of the Firewall on the Server */
		status?: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null;
	}
	export interface Servers_idGetReturnServerPublic_netFirewallsFormProperties {

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/** Status of the Firewall on the Server */
		status: FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null | undefined>,
	}
	export function CreateServers_idGetReturnServerPublic_netFirewallsFormGroup() {
		return new FormGroup<Servers_idGetReturnServerPublic_netFirewallsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null | undefined>(undefined),
		});

	}

	export interface Servers_idGetReturnServerPublic_netIpv4 {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: boolean;

		/**
		 * Reverse DNS PTR entry for the IPv4 addresses of this Server
		 * Required
		 */
		dns_ptr: string;

		/** ID of the Resource */
		id?: number | null;

		/**
		 * IP address (v4) of this Server
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idGetReturnServerPublic_netIpv4FormProperties {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Reverse DNS PTR entry for the IPv4 addresses of this Server
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address (v4) of this Server
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerPublic_netIpv4FormGroup() {
		return new FormGroup<Servers_idGetReturnServerPublic_netIpv4FormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerPublic_netIpv6 {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: boolean;

		/**
		 * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
		 * Required
		 */
		Servers_idGetReturnServerPublic_netIpv6Dns_ptr: Array<Servers_idGetReturnServerPublic_netIpv6Dns_ptr>;

		/** ID of the Resource */
		id?: number | null;

		/**
		 * IP address (v6) of this Server
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idGetReturnServerPublic_netIpv6FormProperties {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address (v6) of this Server
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerPublic_netIpv6FormGroup() {
		return new FormGroup<Servers_idGetReturnServerPublic_netIpv6FormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerPublic_netIpv6Dns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv6 address of this Server for which the reverse DNS entry has been set up
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idGetReturnServerPublic_netIpv6Dns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv6 address of this Server for which the reverse DNS entry has been set up
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerPublic_netIpv6Dns_ptrFormGroup() {
		return new FormGroup<Servers_idGetReturnServerPublic_netIpv6Dns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerServer_type {

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: number;

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: Server_typesGetByNameReturnServer_typesCpu_type;

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: boolean;

		/**
		 * Description of the Server type
		 * Required
		 */
		description: string;

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: number;

		/**
		 * ID of the Server type
		 * Required
		 */
		id: number;

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: number;

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different Locations
		 * Required
		 */
		Servers_idGetReturnServerServer_typePrices: Array<Servers_idGetReturnServerServer_typePrices>;

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: Server_typesGetByNameReturnServer_typesStorage_type;
	}
	export interface Servers_idGetReturnServerServer_typeFormProperties {

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: FormControl<number | null | undefined>,

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>,

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/**
		 * Description of the Server type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * ID of the Server type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>,
	}
	export function CreateServers_idGetReturnServerServer_typeFormGroup() {
		return new FormGroup<Servers_idGetReturnServerServer_typeFormProperties>({
			cores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cpu_type: new FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storage_type: new FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerServer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Server type in this Location
		 * Required
		 */
		price_hourly: Servers_idGetReturnServerServer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Server type in this Location
		 * Required
		 */
		price_monthly: Servers_idGetReturnServerServer_typePricesPrice_monthly;
	}
	export interface Servers_idGetReturnServerServer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerServer_typePricesFormGroup() {
		return new FormGroup<Servers_idGetReturnServerServer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerServer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Servers_idGetReturnServerServer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerServer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Servers_idGetReturnServerServer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idGetReturnServerServer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Servers_idGetReturnServerServer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServers_idGetReturnServerServer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Servers_idGetReturnServerServer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New name to set */
		name?: string | null;
	}
	export interface Servers_idPutPutBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New name to set */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutPutBodyFormGroup() {
		return new FormGroup<Servers_idPutPutBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Servers_idPutReturn {
		server?: Servers_idPutReturnServer;
	}
	export interface Servers_idPutReturnFormProperties {
	}
	export function CreateServers_idPutReturnFormGroup() {
		return new FormGroup<Servers_idPutReturnFormProperties>({
		});

	}

	export interface Servers_idPutReturnServer {

		/**
		 * Time window (UTC) in which the backup will run, or null if the backups are not enabled
		 * Required
		 */
		backup_window: string;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Datacenter this Resource is located at
		 * Required
		 */
		datacenter: Servers_idPutReturnServerDatacenter;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		image: Servers_idPutReturnServerImage;

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: number;

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: number;

		/**
		 * ISO Image that is attached to this Server. Null if no ISO is attached.
		 * Required
		 */
		iso: Servers_idPutReturnServerIso;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };
		load_balancers?: Array<number>;

		/**
		 * True if Server has been locked and is not available to user
		 * Required
		 */
		locked: boolean;

		/**
		 * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: string;

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: number;
		placement_group?: Servers_idPutReturnServerPlacement_group;

		/**
		 * Size of the primary Disk
		 * Required
		 */
		primary_disk_size: number;

		/**
		 * Private networks information
		 * Required
		 */
		Servers_idPutReturnServerPrivate_net: Array<Servers_idPutReturnServerPrivate_net>;

		/**
		 * Protection configuration for the Server
		 * Required
		 */
		protection: Servers_idPutReturnServerProtection;

		/**
		 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
		 * Required
		 */
		public_net: Servers_idPutReturnServerPublic_net;

		/**
		 * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
		 * Required
		 */
		rescue_enabled: boolean;

		/**
		 * Type of Server - determines how much ram, disk and cpu a Server has
		 * Required
		 */
		server_type: Servers_idPutReturnServerServer_type;

		/**
		 * Status of the Server
		 * Required
		 */
		status: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus;

		/** IDs of Volumes assigned to this Server */
		volumes?: Array<number>;
	}
	export interface Servers_idPutReturnServerFormProperties {

		/**
		 * Time window (UTC) in which the backup will run, or null if the backups are not enabled
		 * Required
		 */
		backup_window: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Free Traffic for the current billing period in bytes
		 * Required
		 */
		included_traffic: FormControl<number | null | undefined>,

		/**
		 * Inbound Traffic for the current billing period in bytes
		 * Required
		 */
		ingoing_traffic: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * True if Server has been locked and is not available to user
		 * Required
		 */
		locked: FormControl<boolean | null | undefined>,

		/**
		 * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Outbound Traffic for the current billing period in bytes
		 * Required
		 */
		outgoing_traffic: FormControl<number | null | undefined>,

		/**
		 * Size of the primary Disk
		 * Required
		 */
		primary_disk_size: FormControl<number | null | undefined>,

		/**
		 * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
		 * Required
		 */
		rescue_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Status of the Server
		 * Required
		 */
		status: FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus | null | undefined>,
	}
	export function CreateServers_idPutReturnServerFormGroup() {
		return new FormGroup<Servers_idPutReturnServerFormProperties>({
			backup_window: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			included_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ingoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outgoing_traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			primary_disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rescue_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerDatacenter {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/** Required */
		location: Servers_idPutReturnServerDatacenterLocation;

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: string;

		/**
		 * The Server types the Datacenter can handle
		 * Required
		 */
		server_types: Servers_idPutReturnServerDatacenterServer_types;
	}
	export interface Servers_idPutReturnServerDatacenterFormProperties {

		/**
		 * Description of the Datacenter
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Datacenter
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerDatacenterFormGroup() {
		return new FormGroup<Servers_idPutReturnServerDatacenterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerDatacenterLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Servers_idPutReturnServerDatacenterLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerDatacenterLocationFormGroup() {
		return new FormGroup<Servers_idPutReturnServerDatacenterLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerDatacenterServer_types {

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available: Array<number>;

		/**
		 * IDs of Server types that are supported and for which the Datacenter has enough resources left
		 * Required
		 */
		available_for_migration: Array<number>;

		/**
		 * IDs of Server types that are supported in the Datacenter
		 * Required
		 */
		supported: Array<number>;
	}
	export interface Servers_idPutReturnServerDatacenterServer_typesFormProperties {
	}
	export function CreateServers_idPutReturnServerDatacenterServer_typesFormGroup() {
		return new FormGroup<Servers_idPutReturnServerDatacenterServer_typesFormProperties>({
		});

	}

	export interface Servers_idPutReturnServerImage {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: number;

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Information about the Server the Image was created from
		 * Required
		 */
		created_from: Servers_idPutReturnServerImageCreated_from;

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: string;

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the Image
		 * Required
		 */
		description: string;

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: number;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: string;

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor;

		/**
		 * Operating system version
		 * Required
		 */
		os_version: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Servers_idPutReturnServerImageProtection;

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy?: boolean | null;

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus;

		/**
		 * Type of the Image
		 * Required
		 */
		type: ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType;
	}
	export interface Servers_idPutReturnServerImageFormProperties {

		/**
		 * ID of Server the Image is bound to. Only set for Images of type `backup`.
		 * Required
		 */
		bound_to: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Point in time where the Image was deleted (in ISO-8601 format)
		 * Required
		 */
		deleted: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the Image
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Size of the disk contained in the Image in GB
		 * Required
		 */
		disk_size: FormControl<number | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
		 * Required
		 */
		image_size: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique identifier of the Image. This value is only set for system Images.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Flavor of operating system contained in the Image
		 * Required
		 */
		os_flavor: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>,

		/**
		 * Operating system version
		 * Required
		 */
		os_version: FormControl<string | null | undefined>,

		/** Indicates that rapid deploy of the Image is available */
		rapid_deploy: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Image can be used or if it's still being created or unavailable
		 * Required
		 */
		status: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>,

		/**
		 * Type of the Image
		 * Required
		 */
		type: FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>,
	}
	export function CreateServers_idPutReturnServerImageFormGroup() {
		return new FormGroup<Servers_idPutReturnServerImageFormProperties>({
			bound_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			os_flavor: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesOs_flavor | null | undefined>(undefined, [Validators.required]),
			os_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rapid_deploy: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImagesGetBySortAndTypeAndStatusAndBound_toAndInclude_deprecatedAndNameAndLabel_selectorAndArchitectureReturnImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerImageCreated_from {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: number;

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: string;
	}
	export interface Servers_idPutReturnServerImageCreated_fromFormProperties {

		/**
		 * ID of the Server the Image was created from
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Server name at the time the Image was created
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerImageCreated_fromFormGroup() {
		return new FormGroup<Servers_idPutReturnServerImageCreated_fromFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerImageProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Servers_idPutReturnServerImageProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateServers_idPutReturnServerImageProtectionFormGroup() {
		return new FormGroup<Servers_idPutReturnServerImageProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerIso {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture;

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: string;

		/**
		 * Description of the ISO
		 * Required
		 */
		description: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: string;

		/**
		 * Type of the ISO
		 * Required
		 */
		type: IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType;
	}
	export interface Servers_idPutReturnServerIsoFormProperties {

		/**
		 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
		 * Required
		 */
		architecture: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>,

		/**
		 * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
		 * Required
		 */
		deprecated: FormControl<string | null | undefined>,

		/**
		 * Description of the ISO
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the ISO. Only set for public ISOs
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the ISO
		 * Required
		 */
		type: FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>,
	}
	export function CreateServers_idPutReturnServerIsoFormGroup() {
		return new FormGroup<Servers_idPutReturnServerIsoFormProperties>({
			architecture: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosArchitecture | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IsosGetByNameAndArchitectureAndInclude_architecture_wildcardReturnIsosType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerPlacement_group {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Array of IDs of Servers that are part of this Placement Group
		 * Required
		 */
		servers: Array<number>;

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType;
	}
	export interface Servers_idPutReturnServerPlacement_groupFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the Placement Group
		 * Required
		 */
		type: FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>,
	}
	export function CreateServers_idPutReturnServerPlacement_groupFormGroup() {
		return new FormGroup<Servers_idPutReturnServerPlacement_groupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Placement_groupsGetBySortAndNameAndLabel_selectorAndTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerPrivate_net {
		alias_ips?: Array<string>;
		ip?: string | null;
		mac_address?: string | null;
		network?: number | null;
	}
	export interface Servers_idPutReturnServerPrivate_netFormProperties {
		ip: FormControl<string | null | undefined>,
		mac_address: FormControl<string | null | undefined>,
		network: FormControl<number | null | undefined>,
	}
	export function CreateServers_idPutReturnServerPrivate_netFormGroup() {
		return new FormGroup<Servers_idPutReturnServerPrivate_netFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			mac_address: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Servers_idPutReturnServerProtection {

		/**
		 * If true, prevents the Server from being deleted
		 * Required
		 */
		delete: boolean;

		/**
		 * If true, prevents the Server from being rebuilt
		 * Required
		 */
		rebuild: boolean;
	}
	export interface Servers_idPutReturnServerProtectionFormProperties {

		/**
		 * If true, prevents the Server from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,

		/**
		 * If true, prevents the Server from being rebuilt
		 * Required
		 */
		rebuild: FormControl<boolean | null | undefined>,
	}
	export function CreateServers_idPutReturnServerProtectionFormGroup() {
		return new FormGroup<Servers_idPutReturnServerProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rebuild: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerPublic_net {

		/** Firewalls applied to the public network interface of this Server */
		Servers_idPutReturnServerPublic_netFirewalls?: Array<Servers_idPutReturnServerPublic_netFirewalls>;

		/**
		 * IDs of Floating IPs assigned to this Server
		 * Required
		 */
		floating_ips: Array<number>;

		/**
		 * IP address (v4) and its reverse DNS entry of this Server
		 * Required
		 */
		ipv4: Servers_idPutReturnServerPublic_netIpv4;

		/**
		 * IPv6 network assigned to this Server and its reverse DNS entry
		 * Required
		 */
		ipv6: Servers_idPutReturnServerPublic_netIpv6;
	}
	export interface Servers_idPutReturnServerPublic_netFormProperties {
	}
	export function CreateServers_idPutReturnServerPublic_netFormGroup() {
		return new FormGroup<Servers_idPutReturnServerPublic_netFormProperties>({
		});

	}

	export interface Servers_idPutReturnServerPublic_netFirewalls {

		/** ID of the Resource */
		id?: number | null;

		/** Status of the Firewall on the Server */
		status?: ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null;
	}
	export interface Servers_idPutReturnServerPublic_netFirewallsFormProperties {

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/** Status of the Firewall on the Server */
		status: FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null | undefined>,
	}
	export function CreateServers_idPutReturnServerPublic_netFirewallsFormGroup() {
		return new FormGroup<Servers_idPutReturnServerPublic_netFirewallsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ServersGetByNameAndLabel_selectorAndSortAndStatusReturnServersPublic_netFirewallsStatus | null | undefined>(undefined),
		});

	}

	export interface Servers_idPutReturnServerPublic_netIpv4 {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: boolean;

		/**
		 * Reverse DNS PTR entry for the IPv4 addresses of this Server
		 * Required
		 */
		dns_ptr: string;

		/** ID of the Resource */
		id?: number | null;

		/**
		 * IP address (v4) of this Server
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idPutReturnServerPublic_netIpv4FormProperties {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/**
		 * Reverse DNS PTR entry for the IPv4 addresses of this Server
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address (v4) of this Server
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerPublic_netIpv4FormGroup() {
		return new FormGroup<Servers_idPutReturnServerPublic_netIpv4FormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerPublic_netIpv6 {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: boolean;

		/**
		 * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
		 * Required
		 */
		Servers_idPutReturnServerPublic_netIpv6Dns_ptr: Array<Servers_idPutReturnServerPublic_netIpv6Dns_ptr>;

		/** ID of the Resource */
		id?: number | null;

		/**
		 * IP address (v6) of this Server
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idPutReturnServerPublic_netIpv6FormProperties {

		/**
		 * If the IP is blocked by our anti abuse dept
		 * Required
		 */
		blocked: FormControl<boolean | null | undefined>,

		/** ID of the Resource */
		id: FormControl<number | null | undefined>,

		/**
		 * IP address (v6) of this Server
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerPublic_netIpv6FormGroup() {
		return new FormGroup<Servers_idPutReturnServerPublic_netIpv6FormProperties>({
			blocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerPublic_netIpv6Dns_ptr {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Single IPv6 address of this Server for which the reverse DNS entry has been set up
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idPutReturnServerPublic_netIpv6Dns_ptrFormProperties {

		/**
		 * DNS pointer for the specific IP address
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Single IPv6 address of this Server for which the reverse DNS entry has been set up
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerPublic_netIpv6Dns_ptrFormGroup() {
		return new FormGroup<Servers_idPutReturnServerPublic_netIpv6Dns_ptrFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerServer_type {

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: number;

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: Server_typesGetByNameReturnServer_typesCpu_type;

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: boolean;

		/**
		 * Description of the Server type
		 * Required
		 */
		description: string;

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: number;

		/**
		 * ID of the Server type
		 * Required
		 */
		id: number;

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: number;

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: string;

		/**
		 * Prices in different Locations
		 * Required
		 */
		Servers_idPutReturnServerServer_typePrices: Array<Servers_idPutReturnServerServer_typePrices>;

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: Server_typesGetByNameReturnServer_typesStorage_type;
	}
	export interface Servers_idPutReturnServerServer_typeFormProperties {

		/**
		 * Number of cpu cores a Server of this type will have
		 * Required
		 */
		cores: FormControl<number | null | undefined>,

		/**
		 * Type of cpu
		 * Required
		 */
		cpu_type: FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>,

		/**
		 * True if Server type is deprecated
		 * Required
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/**
		 * Description of the Server type
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Disk size a Server of this type will have in GB
		 * Required
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * ID of the Server type
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Memory a Server of this type will have in GB
		 * Required
		 */
		memory: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Server type
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of Server boot drive. Local has higher speed. Network has better availability.
		 * Required
		 */
		storage_type: FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>,
	}
	export function CreateServers_idPutReturnServerServer_typeFormGroup() {
		return new FormGroup<Servers_idPutReturnServerServer_typeFormProperties>({
			cores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cpu_type: new FormControl<Server_typesGetByNameReturnServer_typesCpu_type | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storage_type: new FormControl<Server_typesGetByNameReturnServer_typesStorage_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerServer_typePrices {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: string;

		/**
		 * Hourly costs for a Server type in this Location
		 * Required
		 */
		price_hourly: Servers_idPutReturnServerServer_typePricesPrice_hourly;

		/**
		 * Monthly costs for a Server type in this Location
		 * Required
		 */
		price_monthly: Servers_idPutReturnServerServer_typePricesPrice_monthly;
	}
	export interface Servers_idPutReturnServerServer_typePricesFormProperties {

		/**
		 * Name of the Location the price is for
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerServer_typePricesFormGroup() {
		return new FormGroup<Servers_idPutReturnServerServer_typePricesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerServer_typePricesPrice_hourly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Servers_idPutReturnServerServer_typePricesPrice_hourlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerServer_typePricesPrice_hourlyFormGroup() {
		return new FormGroup<Servers_idPutReturnServerServer_typePricesPrice_hourlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idPutReturnServerServer_typePricesPrice_monthly {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: string;

		/**
		 * Price without VAT
		 * Required
		 */
		net: string;
	}
	export interface Servers_idPutReturnServerServer_typePricesPrice_monthlyFormProperties {

		/**
		 * Price with VAT added
		 * Required
		 */
		gross: FormControl<string | null | undefined>,

		/**
		 * Price without VAT
		 * Required
		 */
		net: FormControl<string | null | undefined>,
	}
	export function CreateServers_idPutReturnServerServer_typePricesPrice_monthlyFormGroup() {
		return new FormGroup<Servers_idPutReturnServerServer_typePricesPrice_monthlyFormProperties>({
			gross: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			net: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsGetBySortAndStatusReturn {

		/** Required */
		Servers_idActionsGetBySortAndStatusReturnActions: Array<Servers_idActionsGetBySortAndStatusReturnActions>;
		meta?: Servers_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Servers_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateServers_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Servers_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Servers_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Servers_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Servers_idActionsGetBySortAndStatusReturnActionsResources: Array<Servers_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Servers_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateServers_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Servers_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Servers_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Servers_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Servers_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Servers_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Servers_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Servers_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateServers_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Servers_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Servers_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Servers_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateServers_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Servers_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsAdd_to_placement_groupPostPostBody {

		/**
		 * ID of Placement Group the Server should be added to
		 * Required
		 */
		placement_group: number;
	}
	export interface Servers_idActionsAdd_to_placement_groupPostPostBodyFormProperties {

		/**
		 * ID of Placement Group the Server should be added to
		 * Required
		 */
		placement_group: FormControl<number | null | undefined>,
	}
	export function CreateServers_idActionsAdd_to_placement_groupPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsAdd_to_placement_groupPostPostBodyFormProperties>({
			placement_group: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsAttach_isoPostPostBody {

		/**
		 * ID or name of ISO to attach to the Server as listed in GET `/isos`
		 * Required
		 */
		iso: string;
	}
	export interface Servers_idActionsAttach_isoPostPostBodyFormProperties {

		/**
		 * ID or name of ISO to attach to the Server as listed in GET `/isos`
		 * Required
		 */
		iso: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActionsAttach_isoPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsAttach_isoPostPostBodyFormProperties>({
			iso: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsAttach_to_networkPostPostBody {

		/** Additional IPs to be assigned to this Server */
		alias_ips?: Array<string>;

		/** IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address */
		ip?: string | null;

		/**
		 * ID of an existing network to attach the Server to
		 * Required
		 */
		network: number;
	}
	export interface Servers_idActionsAttach_to_networkPostPostBodyFormProperties {

		/** IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address */
		ip: FormControl<string | null | undefined>,

		/**
		 * ID of an existing network to attach the Server to
		 * Required
		 */
		network: FormControl<number | null | undefined>,
	}
	export function CreateServers_idActionsAttach_to_networkPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsAttach_to_networkPostPostBodyFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsChange_alias_ipsPostPostBody {

		/**
		 * New alias IPs to set for this Server
		 * Required
		 */
		alias_ips: Array<string>;

		/**
		 * ID of an existing Network already attached to the Server
		 * Required
		 */
		network: number;
	}
	export interface Servers_idActionsChange_alias_ipsPostPostBodyFormProperties {

		/**
		 * ID of an existing Network already attached to the Server
		 * Required
		 */
		network: FormControl<number | null | undefined>,
	}
	export function CreateServers_idActionsChange_alias_ipsPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsChange_alias_ipsPostPostBodyFormProperties>({
			network: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsChange_dns_ptrPostPostBody {

		/**
		 * Hostname to set as a reverse DNS PTR entry, reset to original value if `null`
		 * Required
		 */
		dns_ptr: string;

		/**
		 * Primary IP address for which the reverse DNS entry should be set
		 * Required
		 */
		ip: string;
	}
	export interface Servers_idActionsChange_dns_ptrPostPostBodyFormProperties {

		/**
		 * Hostname to set as a reverse DNS PTR entry, reset to original value if `null`
		 * Required
		 */
		dns_ptr: FormControl<string | null | undefined>,

		/**
		 * Primary IP address for which the reverse DNS entry should be set
		 * Required
		 */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActionsChange_dns_ptrPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsChange_dns_ptrPostPostBodyFormProperties>({
			dns_ptr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsChange_protectionPostPostBody {

		/** If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value) */
		delete?: boolean | null;

		/** If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value) */
		rebuild?: boolean | null;
	}
	export interface Servers_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value) */
		delete: FormControl<boolean | null | undefined>,

		/** If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value) */
		rebuild: FormControl<boolean | null | undefined>,
	}
	export function CreateServers_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
			rebuild: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Servers_idActionsChange_typePostPostBody {

		/**
		 * ID or name of Server type the Server should migrate to
		 * Required
		 */
		server_type: string;

		/**
		 * If false, do not upgrade the disk (this allows downgrading the Server type later)
		 * Required
		 */
		upgrade_disk: boolean;
	}
	export interface Servers_idActionsChange_typePostPostBodyFormProperties {

		/**
		 * ID or name of Server type the Server should migrate to
		 * Required
		 */
		server_type: FormControl<string | null | undefined>,

		/**
		 * If false, do not upgrade the disk (this allows downgrading the Server type later)
		 * Required
		 */
		upgrade_disk: FormControl<boolean | null | undefined>,
	}
	export function CreateServers_idActionsChange_typePostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsChange_typePostPostBodyFormProperties>({
			server_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upgrade_disk: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsCreate_imagePostPostBody {

		/** Description of the Image, will be auto-generated if not set */
		description?: string | null;

		/** User-defined labels (key-value pairs) */
		labels?: Servers_idActionsCreate_imagePostPostBodyLabels;

		/** Type of Image to create (default: `snapshot`) */
		type?: Servers_idActionsCreate_imagePostPostBodyType | null;
	}
	export interface Servers_idActionsCreate_imagePostPostBodyFormProperties {

		/** Description of the Image, will be auto-generated if not set */
		description: FormControl<string | null | undefined>,

		/** Type of Image to create (default: `snapshot`) */
		type: FormControl<Servers_idActionsCreate_imagePostPostBodyType | null | undefined>,
	}
	export function CreateServers_idActionsCreate_imagePostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsCreate_imagePostPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Servers_idActionsCreate_imagePostPostBodyType | null | undefined>(undefined),
		});

	}

	export interface Servers_idActionsCreate_imagePostPostBodyLabels {

		/** New label */
		labelkey?: string | null;
	}
	export interface Servers_idActionsCreate_imagePostPostBodyLabelsFormProperties {

		/** New label */
		labelkey: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActionsCreate_imagePostPostBodyLabelsFormGroup() {
		return new FormGroup<Servers_idActionsCreate_imagePostPostBodyLabelsFormProperties>({
			labelkey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Servers_idActionsCreate_imagePostPostBodyType { snapshot = 'snapshot', backup = 'backup' }

	export interface Servers_idActionsDetach_from_networkPostPostBody {

		/**
		 * ID of an existing network to detach the Server from
		 * Required
		 */
		network: number;
	}
	export interface Servers_idActionsDetach_from_networkPostPostBodyFormProperties {

		/**
		 * ID of an existing network to detach the Server from
		 * Required
		 */
		network: FormControl<number | null | undefined>,
	}
	export function CreateServers_idActionsDetach_from_networkPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsDetach_from_networkPostPostBodyFormProperties>({
			network: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActionsEnable_rescuePostPostBody {

		/** Array of SSH key IDs which should be injected into the rescue system. */
		ssh_keys?: Array<number>;

		/** Type of rescue system to boot (default: `linux64`) */
		type?: Servers_idActionsEnable_rescuePostPostBodyType | null;
	}
	export interface Servers_idActionsEnable_rescuePostPostBodyFormProperties {

		/** Type of rescue system to boot (default: `linux64`) */
		type: FormControl<Servers_idActionsEnable_rescuePostPostBodyType | null | undefined>,
	}
	export function CreateServers_idActionsEnable_rescuePostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsEnable_rescuePostPostBodyFormProperties>({
			type: new FormControl<Servers_idActionsEnable_rescuePostPostBodyType | null | undefined>(undefined),
		});

	}

	export enum Servers_idActionsEnable_rescuePostPostBodyType { linux64 = 'linux64', linux32 = 'linux32' }

	export interface Servers_idActionsRebuildPostPostBody {

		/**
		 * ID or name of Image to rebuilt from.
		 * Required
		 */
		image: string;
	}
	export interface Servers_idActionsRebuildPostPostBodyFormProperties {

		/**
		 * ID or name of Image to rebuilt from.
		 * Required
		 */
		image: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActionsRebuildPostPostBodyFormGroup() {
		return new FormGroup<Servers_idActionsRebuildPostPostBodyFormProperties>({
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActions_action_idGetReturn {

		/** Required */
		action: Servers_idActions_action_idGetReturnAction;
	}
	export interface Servers_idActions_action_idGetReturnFormProperties {
	}
	export function CreateServers_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Servers_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Servers_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Servers_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Servers_idActions_action_idGetReturnActionResources: Array<Servers_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Servers_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateServers_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Servers_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Servers_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Servers_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Servers_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServers_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Servers_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Servers_idMetricsGetByTypeAndStartAndEndAndStepType { cpu = 'cpu', disk = 'disk', network = 'network' }

	export interface Servers_idMetricsGetByTypeAndStartAndEndAndStepReturn {

		/** Required */
		metrics: Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetrics;
	}
	export interface Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnFormProperties {
	}
	export function CreateServers_idMetricsGetByTypeAndStartAndEndAndStepReturnFormGroup() {
		return new FormGroup<Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnFormProperties>({
		});

	}

	export interface Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetrics {

		/**
		 * End of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		end: string;

		/**
		 * Start of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		start: string;

		/**
		 * Resolution of results in seconds.
		 * Required
		 */
		step: number;

		/**
		 * Hash with timeseries information, containing the name of timeseries as key
		 * Required
		 */
		time_series: {[id: string]: Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series };
	}
	export interface Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsFormProperties {

		/**
		 * End of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		end: FormControl<string | null | undefined>,

		/**
		 * Start of period of metrics reported (in ISO-8601 format)
		 * Required
		 */
		start: FormControl<string | null | undefined>,

		/**
		 * Resolution of results in seconds.
		 * Required
		 */
		step: FormControl<number | null | undefined>,

		/**
		 * Hash with timeseries information, containing the name of timeseries as key
		 * Required
		 */
		time_series: FormControl<{[id: string]: Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series } | null | undefined>,
	}
	export function CreateServers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsFormGroup() {
		return new FormGroup<Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsFormProperties>({
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			step: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time_series: new FormControl<{[id: string]: Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_series {

		/**
		 * Metrics Timestamps with values
		 * Required
		 */
		values: Array<string>;
	}
	export interface Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_seriesFormProperties {
	}
	export function CreateServers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_seriesFormGroup() {
		return new FormGroup<Servers_idMetricsGetByTypeAndStartAndEndAndStepReturnMetricsTime_seriesFormProperties>({
		});

	}

	export enum Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorSort { id = 'id', 'id:asc' = 'id:asc', 'id:desc' = 'id:desc', name = 'name', 'name:asc' = 'name:asc', 'name:desc' = 'name:desc' }

	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturn {
		meta?: Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMeta;

		/** Required */
		Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnSsh_keys: Array<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnSsh_keys>;
	}
	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnFormProperties {
	}
	export function CreateSsh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnFormGroup() {
		return new FormGroup<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnFormProperties>({
		});

	}

	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMeta {

		/** Required */
		pagination: Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaPagination;
	}
	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaFormProperties {
	}
	export function CreateSsh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaFormGroup() {
		return new FormGroup<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaFormProperties>({
		});

	}

	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateSsh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaPaginationFormGroup() {
		return new FormGroup<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnSsh_keys {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Fingerprint of public key
		 * Required
		 */
		fingerprint: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Public key
		 * Required
		 */
		public_key: string;
	}
	export interface Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnSsh_keysFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Fingerprint of public key
		 * Required
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Public key
		 * Required
		 */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSsh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnSsh_keysFormGroup() {
		return new FormGroup<Ssh_keysGetBySortAndNameAndFingerprintAndLabel_selectorReturnSsh_keysFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ssh_keysPostPostBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/**
		 * Name of the SSH key
		 * Required
		 */
		name: string;

		/**
		 * Public key
		 * Required
		 */
		public_key: string;
	}
	export interface Ssh_keysPostPostBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/**
		 * Name of the SSH key
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Public key
		 * Required
		 */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSsh_keysPostPostBodyFormGroup() {
		return new FormGroup<Ssh_keysPostPostBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ssh_keys_idGetReturn {

		/** Required */
		ssh_key: Ssh_keys_idGetReturnSsh_key;
	}
	export interface Ssh_keys_idGetReturnFormProperties {
	}
	export function CreateSsh_keys_idGetReturnFormGroup() {
		return new FormGroup<Ssh_keys_idGetReturnFormProperties>({
		});

	}

	export interface Ssh_keys_idGetReturnSsh_key {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Fingerprint of public key
		 * Required
		 */
		fingerprint: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Public key
		 * Required
		 */
		public_key: string;
	}
	export interface Ssh_keys_idGetReturnSsh_keyFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Fingerprint of public key
		 * Required
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Public key
		 * Required
		 */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSsh_keys_idGetReturnSsh_keyFormGroup() {
		return new FormGroup<Ssh_keys_idGetReturnSsh_keyFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ssh_keys_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** New name Name to set */
		name?: string | null;
	}
	export interface Ssh_keys_idPutPutBodyFormProperties {

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** New name Name to set */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSsh_keys_idPutPutBodyFormGroup() {
		return new FormGroup<Ssh_keys_idPutPutBodyFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ssh_keys_idPutReturn {

		/** Required */
		ssh_key: Ssh_keys_idPutReturnSsh_key;
	}
	export interface Ssh_keys_idPutReturnFormProperties {
	}
	export function CreateSsh_keys_idPutReturnFormGroup() {
		return new FormGroup<Ssh_keys_idPutReturnFormProperties>({
		});

	}

	export interface Ssh_keys_idPutReturnSsh_key {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Fingerprint of public key
		 * Required
		 */
		fingerprint: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Public key
		 * Required
		 */
		public_key: string;
	}
	export interface Ssh_keys_idPutReturnSsh_keyFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Fingerprint of public key
		 * Required
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Public key
		 * Required
		 */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSsh_keys_idPutReturnSsh_keyFormGroup() {
		return new FormGroup<Ssh_keys_idPutReturnSsh_keyFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturn {
		meta?: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMeta;

		/** Required */
		VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumes: Array<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumes>;
	}
	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnFormProperties {
	}
	export function CreateVolumesGetByStatusAndSortAndNameAndLabel_selectorReturnFormGroup() {
		return new FormGroup<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnFormProperties>({
		});

	}

	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMeta {

		/** Required */
		pagination: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaPagination;
	}
	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaFormProperties {
	}
	export function CreateVolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaFormGroup() {
		return new FormGroup<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaFormProperties>({
		});

	}

	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateVolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaPaginationFormGroup() {
		return new FormGroup<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumes {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Filesystem of the Volume if formatted on creation, null if not formatted on creation
		 * Required
		 */
		format: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Device path on the file system for the Volume
		 * Required
		 */
		linux_device: string;

		/**
		 * Location of the Volume. Volume can only be attached to Servers in the same Location.
		 * Required
		 */
		location: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesLocation;

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesProtection;

		/**
		 * ID of the Server the Volume is attached to, null if it is not attached at all
		 * Required
		 */
		server: number;

		/**
		 * Size in GB of the Volume
		 * Required
		 */
		size: number;

		/**
		 * Current status of the Volume
		 * Required
		 */
		status: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus;
	}
	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Filesystem of the Volume if formatted on creation, null if not formatted on creation
		 * Required
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Device path on the file system for the Volume
		 * Required
		 */
		linux_device: FormControl<string | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * ID of the Server the Volume is attached to, null if it is not attached at all
		 * Required
		 */
		server: FormControl<number | null | undefined>,

		/**
		 * Size in GB of the Volume
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * Current status of the Volume
		 * Required
		 */
		status: FormControl<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus | null | undefined>,
	}
	export function CreateVolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesFormGroup() {
		return new FormGroup<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			linux_device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateVolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesLocationFormGroup() {
		return new FormGroup<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesProtectionFormGroup() {
		return new FormGroup<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus { creating = 'creating', available = 'available' }

	export interface VolumesPostPostBody {

		/** Auto-mount Volume after attach. `server` must be provided. */
		automount?: boolean | null;

		/** Format Volume after creation. One of: `xfs`, `ext4` */
		format?: string | null;

		/** User-defined labels (key-value pairs) */
		labels?: string | null;

		/** Location to create the Volume in (can be omitted if Server is specified) */
		location?: string | null;

		/**
		 * Name of the volume
		 * Required
		 */
		name: string;

		/** Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server) */
		server?: number | null;

		/**
		 * Size of the Volume in GB
		 * Required
		 */
		size: number;
	}
	export interface VolumesPostPostBodyFormProperties {

		/** Auto-mount Volume after attach. `server` must be provided. */
		automount: FormControl<boolean | null | undefined>,

		/** Format Volume after creation. One of: `xfs`, `ext4` */
		format: FormControl<string | null | undefined>,

		/** User-defined labels (key-value pairs) */
		labels: FormControl<string | null | undefined>,

		/** Location to create the Volume in (can be omitted if Server is specified) */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of the volume
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server) */
		server: FormControl<number | null | undefined>,

		/**
		 * Size of the Volume in GB
		 * Required
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateVolumesPostPostBodyFormGroup() {
		return new FormGroup<VolumesPostPostBodyFormProperties>({
			automount: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idGetReturn {

		/** Required */
		volume: Volumes_idGetReturnVolume;
	}
	export interface Volumes_idGetReturnFormProperties {
	}
	export function CreateVolumes_idGetReturnFormGroup() {
		return new FormGroup<Volumes_idGetReturnFormProperties>({
		});

	}

	export interface Volumes_idGetReturnVolume {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Filesystem of the Volume if formatted on creation, null if not formatted on creation
		 * Required
		 */
		format: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Device path on the file system for the Volume
		 * Required
		 */
		linux_device: string;

		/**
		 * Location of the Volume. Volume can only be attached to Servers in the same Location.
		 * Required
		 */
		location: Volumes_idGetReturnVolumeLocation;

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Volumes_idGetReturnVolumeProtection;

		/**
		 * ID of the Server the Volume is attached to, null if it is not attached at all
		 * Required
		 */
		server: number;

		/**
		 * Size in GB of the Volume
		 * Required
		 */
		size: number;

		/**
		 * Current status of the Volume
		 * Required
		 */
		status: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus;
	}
	export interface Volumes_idGetReturnVolumeFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Filesystem of the Volume if formatted on creation, null if not formatted on creation
		 * Required
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Device path on the file system for the Volume
		 * Required
		 */
		linux_device: FormControl<string | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * ID of the Server the Volume is attached to, null if it is not attached at all
		 * Required
		 */
		server: FormControl<number | null | undefined>,

		/**
		 * Size in GB of the Volume
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * Current status of the Volume
		 * Required
		 */
		status: FormControl<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus | null | undefined>,
	}
	export function CreateVolumes_idGetReturnVolumeFormGroup() {
		return new FormGroup<Volumes_idGetReturnVolumeFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			linux_device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idGetReturnVolumeLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Volumes_idGetReturnVolumeLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idGetReturnVolumeLocationFormGroup() {
		return new FormGroup<Volumes_idGetReturnVolumeLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idGetReturnVolumeProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Volumes_idGetReturnVolumeProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumes_idGetReturnVolumeProtectionFormGroup() {
		return new FormGroup<Volumes_idGetReturnVolumeProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idPutPutBody {

		/** User-defined labels (key-value pairs) */
		labels?: Volumes_idPutPutBodyLabels;

		/**
		 * New Volume name
		 * Required
		 */
		name: string;
	}
	export interface Volumes_idPutPutBodyFormProperties {

		/**
		 * New Volume name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idPutPutBodyFormGroup() {
		return new FormGroup<Volumes_idPutPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idPutPutBodyLabels {
		labelkey?: string | null;
	}
	export interface Volumes_idPutPutBodyLabelsFormProperties {
		labelkey: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idPutPutBodyLabelsFormGroup() {
		return new FormGroup<Volumes_idPutPutBodyLabelsFormProperties>({
			labelkey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Volumes_idPutReturn {

		/** Required */
		volume: Volumes_idPutReturnVolume;
	}
	export interface Volumes_idPutReturnFormProperties {
	}
	export function CreateVolumes_idPutReturnFormGroup() {
		return new FormGroup<Volumes_idPutReturnFormProperties>({
		});

	}

	export interface Volumes_idPutReturnVolume {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: string;

		/**
		 * Filesystem of the Volume if formatted on creation, null if not formatted on creation
		 * Required
		 */
		format: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: {[id: string]: string };

		/**
		 * Device path on the file system for the Volume
		 * Required
		 */
		linux_device: string;

		/**
		 * Location of the Volume. Volume can only be attached to Servers in the same Location.
		 * Required
		 */
		location: Volumes_idPutReturnVolumeLocation;

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: string;

		/**
		 * Protection configuration for the Resource
		 * Required
		 */
		protection: Volumes_idPutReturnVolumeProtection;

		/**
		 * ID of the Server the Volume is attached to, null if it is not attached at all
		 * Required
		 */
		server: number;

		/**
		 * Size in GB of the Volume
		 * Required
		 */
		size: number;

		/**
		 * Current status of the Volume
		 * Required
		 */
		status: VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus;
	}
	export interface Volumes_idPutReturnVolumeFormProperties {

		/**
		 * Point in time when the Resource was created (in ISO-8601 format)
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * Filesystem of the Volume if formatted on creation, null if not formatted on creation
		 * Required
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * User-defined labels (key-value pairs)
		 * Required
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Device path on the file system for the Volume
		 * Required
		 */
		linux_device: FormControl<string | null | undefined>,

		/**
		 * Name of the Resource. Must be unique per Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * ID of the Server the Volume is attached to, null if it is not attached at all
		 * Required
		 */
		server: FormControl<number | null | undefined>,

		/**
		 * Size in GB of the Volume
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * Current status of the Volume
		 * Required
		 */
		status: FormControl<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus | null | undefined>,
	}
	export function CreateVolumes_idPutReturnVolumeFormGroup() {
		return new FormGroup<Volumes_idPutReturnVolumeFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			linux_device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<VolumesGetByStatusAndSortAndNameAndLabel_selectorReturnVolumesStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idPutReturnVolumeLocation {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: string;

		/**
		 * Description of the Location
		 * Required
		 */
		description: string;

		/**
		 * ID of the Location
		 * Required
		 */
		id: number;

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: number;

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: number;

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: string;

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: string;
	}
	export interface Volumes_idPutReturnVolumeLocationFormProperties {

		/**
		 * City the Location is closest to
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166-1 alpha-2 code of the country the Location resides in
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Description of the Location
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ID of the Location
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Latitude of the city closest to the Location
		 * Required
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the city closest to the Location
		 * Required
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Location
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Name of network zone this Location resides in
		 * Required
		 */
		network_zone: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idPutReturnVolumeLocationFormGroup() {
		return new FormGroup<Volumes_idPutReturnVolumeLocationFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idPutReturnVolumeProtection {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: boolean;
	}
	export interface Volumes_idPutReturnVolumeProtectionFormProperties {

		/**
		 * If true, prevents the Resource from being deleted
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumes_idPutReturnVolumeProtectionFormGroup() {
		return new FormGroup<Volumes_idPutReturnVolumeProtectionFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActionsGetBySortAndStatusReturn {

		/** Required */
		Volumes_idActionsGetBySortAndStatusReturnActions: Array<Volumes_idActionsGetBySortAndStatusReturnActions>;
		meta?: Volumes_idActionsGetBySortAndStatusReturnMeta;
	}
	export interface Volumes_idActionsGetBySortAndStatusReturnFormProperties {
	}
	export function CreateVolumes_idActionsGetBySortAndStatusReturnFormGroup() {
		return new FormGroup<Volumes_idActionsGetBySortAndStatusReturnFormProperties>({
		});

	}

	export interface Volumes_idActionsGetBySortAndStatusReturnActions {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Volumes_idActionsGetBySortAndStatusReturnActionsError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Volumes_idActionsGetBySortAndStatusReturnActionsResources: Array<Volumes_idActionsGetBySortAndStatusReturnActionsResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Volumes_idActionsGetBySortAndStatusReturnActionsFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateVolumes_idActionsGetBySortAndStatusReturnActionsFormGroup() {
		return new FormGroup<Volumes_idActionsGetBySortAndStatusReturnActionsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActionsGetBySortAndStatusReturnActionsError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Volumes_idActionsGetBySortAndStatusReturnActionsErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idActionsGetBySortAndStatusReturnActionsErrorFormGroup() {
		return new FormGroup<Volumes_idActionsGetBySortAndStatusReturnActionsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActionsGetBySortAndStatusReturnActionsResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Volumes_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idActionsGetBySortAndStatusReturnActionsResourcesFormGroup() {
		return new FormGroup<Volumes_idActionsGetBySortAndStatusReturnActionsResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActionsGetBySortAndStatusReturnMeta {

		/** Required */
		pagination: Volumes_idActionsGetBySortAndStatusReturnMetaPagination;
	}
	export interface Volumes_idActionsGetBySortAndStatusReturnMetaFormProperties {
	}
	export function CreateVolumes_idActionsGetBySortAndStatusReturnMetaFormGroup() {
		return new FormGroup<Volumes_idActionsGetBySortAndStatusReturnMetaFormProperties>({
		});

	}

	export interface Volumes_idActionsGetBySortAndStatusReturnMetaPagination {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: number;

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: number;

		/**
		 * Current page number
		 * Required
		 */
		page: number;

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: number;

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: number;

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: number;
	}
	export interface Volumes_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties {

		/**
		 * ID of the last page available. Can be null if the current page is the last one.
		 * Required
		 */
		last_page: FormControl<number | null | undefined>,

		/**
		 * ID of the next page. Can be null if the current page is the last one.
		 * Required
		 */
		next_page: FormControl<number | null | undefined>,

		/**
		 * Current page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Maximum number of items shown per page in the response
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * ID of the previous page. Can be null if the current page is the first one.
		 * Required
		 */
		previous_page: FormControl<number | null | undefined>,

		/**
		 * The total number of entries that exist in the database for this query. Nullable if unknown.
		 * Required
		 */
		total_entries: FormControl<number | null | undefined>,
	}
	export function CreateVolumes_idActionsGetBySortAndStatusReturnMetaPaginationFormGroup() {
		return new FormGroup<Volumes_idActionsGetBySortAndStatusReturnMetaPaginationFormProperties>({
			last_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previous_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActionsAttachPostPostBody {

		/** Auto-mount the Volume after attaching it */
		automount?: boolean | null;

		/**
		 * ID of the Server the Volume will be attached to
		 * Required
		 */
		server: number;
	}
	export interface Volumes_idActionsAttachPostPostBodyFormProperties {

		/** Auto-mount the Volume after attaching it */
		automount: FormControl<boolean | null | undefined>,

		/**
		 * ID of the Server the Volume will be attached to
		 * Required
		 */
		server: FormControl<number | null | undefined>,
	}
	export function CreateVolumes_idActionsAttachPostPostBodyFormGroup() {
		return new FormGroup<Volumes_idActionsAttachPostPostBodyFormProperties>({
			automount: new FormControl<boolean | null | undefined>(undefined),
			server: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActionsChange_protectionPostPostBody {

		/** If true, prevents the Volume from being deleted */
		delete?: boolean | null;
	}
	export interface Volumes_idActionsChange_protectionPostPostBodyFormProperties {

		/** If true, prevents the Volume from being deleted */
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumes_idActionsChange_protectionPostPostBodyFormGroup() {
		return new FormGroup<Volumes_idActionsChange_protectionPostPostBodyFormProperties>({
			delete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Volumes_idActionsResizePostPostBody {

		/**
		 * New Volume size in GB (must be greater than current size)
		 * Required
		 */
		size: number;
	}
	export interface Volumes_idActionsResizePostPostBodyFormProperties {

		/**
		 * New Volume size in GB (must be greater than current size)
		 * Required
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateVolumes_idActionsResizePostPostBodyFormGroup() {
		return new FormGroup<Volumes_idActionsResizePostPostBodyFormProperties>({
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActions_action_idGetReturn {

		/** Required */
		action: Volumes_idActions_action_idGetReturnAction;
	}
	export interface Volumes_idActions_action_idGetReturnFormProperties {
	}
	export function CreateVolumes_idActions_action_idGetReturnFormGroup() {
		return new FormGroup<Volumes_idActions_action_idGetReturnFormProperties>({
		});

	}

	export interface Volumes_idActions_action_idGetReturnAction {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: string;

		/**
		 * Error message for the Action if error occurred, otherwise null
		 * Required
		 */
		error: Volumes_idActions_action_idGetReturnActionError;

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: string;

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: number;

		/**
		 * Resources the Action relates to
		 * Required
		 */
		Volumes_idActions_action_idGetReturnActionResources: Array<Volumes_idActions_action_idGetReturnActionResources>;

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: string;

		/**
		 * Status of the Action
		 * Required
		 */
		status: ActionsGetByIdAndSortAndStatusReturnActionsStatus;
	}
	export interface Volumes_idActions_action_idGetReturnActionFormProperties {

		/**
		 * Command executed in the Action
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/**
		 * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
		 * Required
		 */
		finished: FormControl<string | null | undefined>,

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Progress of Action in percent
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Point in time when the Action was started (in ISO-8601 format)
		 * Required
		 */
		started: FormControl<string | null | undefined>,

		/**
		 * Status of the Action
		 * Required
		 */
		status: FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>,
	}
	export function CreateVolumes_idActions_action_idGetReturnActionFormGroup() {
		return new FormGroup<Volumes_idActions_action_idGetReturnActionFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finished: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			started: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionsGetByIdAndSortAndStatusReturnActionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActions_action_idGetReturnActionError {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: string;

		/**
		 * Humanized error message
		 * Required
		 */
		message: string;
	}
	export interface Volumes_idActions_action_idGetReturnActionErrorFormProperties {

		/**
		 * Fixed machine readable code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Humanized error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idActions_action_idGetReturnActionErrorFormGroup() {
		return new FormGroup<Volumes_idActions_action_idGetReturnActionErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Volumes_idActions_action_idGetReturnActionResources {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: number;

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: string;
	}
	export interface Volumes_idActions_action_idGetReturnActionResourcesFormProperties {

		/**
		 * ID of the Resource
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Type of resource referenced
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVolumes_idActions_action_idGetReturnActionResourcesFormGroup() {
		return new FormGroup<Volumes_idActions_action_idGetReturnActionResourcesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

